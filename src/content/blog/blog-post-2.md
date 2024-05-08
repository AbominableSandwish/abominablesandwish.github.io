---
author: Dylan von Arx
pubDatetime: 2024-01-22T15:28:34.737Z
title: Blog Post 2
slug: blog-post-2
featured: false
ogImage: https://www.dylanvonarx.ch/images/sae_institute_genve_cover.jpg
tags:
  - release
description: The foundation is our characters, who must be able to complement each other perfectly through different abilities and powers. Obsolete powers should be avoided in order to prevent one character from being denigrated. Specific tests should be set up for each mechanic, both for its specific stability and for the stability of all mechanics together.

furtherInfo: false

info:
  - Scholar
canPlaying: false

hasVideo: false
---

## Table of contents

## Introduction

Gameplay was not originally one of my tasks, but due to some unforeseen circumstances, I ended up designing all the mechanics, except for the movement. My previous task was to design the camera behavior and the secondary objects that interact with the girl and the cat, including the menus and in-game interfaces.

## Movement Abilities

Each character has a distinct ability in order to offer a level design that intelligently blocks the player and forces them to switch between characters regularly and constantly.

The cat can move slightly faster than the female character and reach certain narrow areas and high areas in advance to lend a paw/give a paw.

The girl, on the other hand, will have the ability to climb on objects in order to reach certain areas and be able to complete the puzzles and continue on her way together.

## Powers Abilities

Our protagonists, being from different worlds, have a specific ability to better distinguish them and to complete the puzzles and make the obstacles that obstruct their path disappear.

The little girl from reality can pick up objects and put one object in her inventory.

The cat from the dream world has the power to modify the physical and subatomic composition of an object in order to alter its size.

The girl can climb on the enlarged objects and pick up the objects shrunk by our ball of fur.

## Sensor system

The object sensor system works by casting a multitude of rays in front of the characters. The rays are cast until they reach a maximum angle or until they hit an object. The system then calculates which of the detected objects is the closest and stores it. If the player performs an action with the object, the system will use the stored information to determine what action to take.

![Sensor](/images/detectionv3.gif)

```c++
// Defining the starting position
TArray<FHitResult> objectsDetected;
TArray<bool> results = TArray<bool>();
TArray<AActor*> actorsDetected = TArray<AActor*>();
FVector BaseLocation;
if (this->GetOwner()->Tags.Num() != 0) {
	if(this->GetOwner()->Tags[0] == FName("Player"))
		BaseLocation = offset_girl + this->GetOwner()->GetActorLocation() + this->GetOwner()->GetActorForwardVector() * minimum;
	if (this->GetOwner()->Tags[0] == FName("Cat"))
		BaseLocation = offset_cat + this->GetOwner()->GetActorLocation() + this->GetOwner()->GetActorForwardVector() * minimum;
}
const FVector End = BaseLocation + this->GetOwner()->GetActorForwardVector() * maximum;

// Sensor system
for (size_t h = 0; h < raycast_stacks; h++) {
	FRotator tempRot = GetOwner()->GetActorRotation()- FRotator(0, raycast_start_angle, 0);

	FVector Location = BaseLocation + h * FVector::UpVector * raycast_stacks_distance;
	for (size_t i = 0; i < number_raycast; i++)
	{
		FHitResult objectDetected;
		tempRot += FRotator(0, raycast_angle_change, 0);
		FVector end = Location + tempRot.Quaternion().GetForwardVector() * maximum;
		results.Add(GetWorld()->LineTraceSingleByChannel(objectDetected, Location, end , ECollisionChannel::ECC_Visibility, CollisionParameters));
		if (results[i] && objectDetected.GetActor() != nullptr) {
			if (objectDetected.GetActor()->Tags.Num() != 0) {
				actorsDetected.Add(objectDetected.GetActor());
			}
		}
		else {
			if (ActorTarget != nullptr)
				deselect = true;
		}
	}
}
// Calculating the nearest detected object
double min_distance = 0;
AActor* nearActor = nullptr;
for (int i = 0; i != actorsDetected.Num(); i++)
{
	if (isDebug)
		GEngine->AddOnScreenDebugMessage(-1, 0.0f, FColor::Purple, FString::SanitizeFloat(FVector::Dist(actorsDetected[i]->GetActorLocation(), GetOwner()->GetActorLocation())));
	if (nearActor == nullptr) {
		nearActor = actorsDetected[i];
		min_distance = FVector::Dist(actorsDetected[i]->GetActorLocation(), GetOwner()->GetActorLocation());
	}
	else{
		if(min_distance > FVector::Dist(actorsDetected[i]->GetActorLocation(), GetOwner()->GetActorLocation()))
			nearActor = actorsDetected[i];
			min_distance = FVector::Dist(actorsDetected[i]->GetActorLocation(), GetOwner()->GetActorLocation());
	}

}
```

## Objects, cubes, the boat, the key, and others...

The two protagonists can interact with certain objects, each with their own specific powers, in order to sometimes collect and use them to continue the level:

### Enlargement/Shrinking phase

This is a state machine that manages the resizing of objects in order to have total control over their animation.
![Resizing](/gif/Resizing.gif)

#### Elevating phase

First, the elevation raises the object a few centimeters to simulate a magic manipulation.
![Elevating](/gif/Elevating.gif)

```c++
  FTransform transf = (this->GetOwner()->GetTransform());
	LerpProgress += dt / TimeFloating;
	LerpProgress = FMath::Clamp(LerpProgress, 0, 1.0f);
	transf.SetLocation(FMath::Lerp(start_position, next_position, LerpProgress));
	FVector::Dist(transf.GetLocation(), next_position);
	this->GetOwner()->SetActorTransform(transf, b_sweep);

	if (FVector::Dist(next_position, this->GetOwner()->GetActorLocation()) <= 5.0f)
	{
		if (this->GetOwner()->GetComponentByClass<UInteractable>() != nullptr) {
			this->GetOwner()->GetComponentByClass<UInteractable>()->EnableDistortion = true;
		}

		locationFloating = transf.GetLocation();
		state = StateAction::Shaking;
		LerpProgress = 0.0f;
		this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->SetCollisionProfileName(storedObjectCollisionProfileName);
		this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->SetEnableGravity(false);
	}
```

#### Deformation phase

Manipulates the vertices of the object to improve the simulation of a magic spell.
![Deformation](/gif/deformation.gif)

```c++
	FTransform transf = (this->GetOwner()->GetTransform());
	transf.SetLocation(locationFloating);
	this->GetOwner()->SetActorTransform(transf);

	counter += dt;
	if (counter >= 1.5f)
	{
		state = StateAction::Resizing;
	}
```

#### Resizing phase

the main phase of the process is to resize the object. If there is no object that is blocking the object from being resized, then the object will continue to be resized using linear interpolation until it reaches the desired size.

![ResizingPhase](/gif/ResizingPhase.gif)

```c++
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->SetSimulatePhysics(false);
FTransform transf = (this->GetOwner()->GetTransform());
locationFloating += direction * dt * 120.0f;
transf.SetLocation(locationFloating);
LerpProgress += dt / TimeToChangeSize;
LerpProgress = FMath::Clamp(LerpProgress, 0, 1.0f);
transf.SetScale3D(FMath::Lerp(isLittle ? Max3D : Min3D,
	isLittle ? Min3D : Max3D, LerpProgress));

this->GetOwner()->SetActorTransform(transf, b_sweep);

bool isFinished = false;
if (FVector::DistSquared(isLittle ? Min3D : Max3D, transf.GetScale3D()) < FLT_EPSILON)
{
	this->GetOwner()->SetActorTransform(transf);
	transf.SetScale3D(isLittle ? Min3D : Max3D);
	isFinished = true;
	LerpProgress = 0.0f;
}

if (isFinished)
{
	if (this->GetOwner()->GetComponentByClass<UInteractable>() != nullptr) {
		this->GetOwner()->GetComponentByClass<UInteractable>()->EnableDistortion = false;
	}

	countertouch = 0;
	this->direction = FVector::ZeroVector;
	locationFloating = FVector(0, 0, 0);
	start_position = GetOwner()->GetActorLocation();
	// BUG : Linetrace still detects own actor
	FHitResult HitResult;
	ECollisionChannel Channel = ECC_Visibility;
	FCollisionQueryParams CollisionParams;
	CollisionParams.AddIgnoredActor(GetOwner());
	GetWorld()->LineTraceSingleByChannel(
		HitResult, start_position, start_position + FVector(0, 0, -max_height - 1000), Channel, CollisionParams);
	next_position = HitResult.Location;

	if (this->GetOwner()->Tags.Num() != 0) {
		if (this->GetOwner()->Tags[0] == FName("Boat")) {
			state = StateAction::Fall;
			return;
		}
	}

	if (this->GetOwner()->Tags.Num() > 1) {
		if (this->GetOwner()->Tags[1] == FName("Boat")) {
			state = StateAction::Fall;
			return;
		}
	}
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->SetSimulatePhysics(true);
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->SetEnableGravity(true);
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->AddForce(FVector::UpVector);
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>();
	state = StateAction::None;
}
```

The object in question is checking whether the object it is in contact with is aligned with its own axis. It does this by calculating the scalar product of the two objects' vectors. The scalar product of two vectors is a measure of how aligned they are. If the scalar product is zero, then the vectors are orthogonal, or perpendicular to each other. If the scalar product is positive, then the vectors are pointing in the same direction. If the scalar product is negative, then the vectors are pointing in opposite directions.

![scalar](/images/scalara.png)

```c++
//if is other of player and cat
if (OtherActor->Tags.Num() != 0) {
	if (OtherActor->Tags[0] == FName("Player") || OtherActor->Tags[0] == FName("Cat")) {
		return;
	}
}
if (OtherActor != this->GetOwner()) {
	if (state == StateAction::Resizing)
	{
		FVector dir;
		FVector dir_2;

		//single direction
		if (countertouch == 0) {
			OtherActorTouched = OtherActor;
			if (FVector::Dist(this->GetOwner()->GetActorLocation(), Hit.ImpactPoint) > 0.1f) {
				dir = this->GetOwner()->GetActorLocation() - Hit.ImpactPoint;
				dir.Normalize();
				countertouch++;
			}
		}
		else {
			if(OtherActorTouched != OtherActor){
				DrawDebugSphere(this->GetWorld(), Hit.ImpactPoint, 10, 16, FColor::Red, false, 10);
				dir_2 = this->GetOwner()->GetActorLocation() - Hit.ImpactPoint;
				dir_2.Normalize();
				if (FVector::Dist(this->direction, dir_2) >= 0.15f) {
					countertouch++;
				}
			}
		}

		//multiple direction
		float dotResult = 0;

		if (countertouch == 1) {
			if (this->direction == FVector::ZeroVector) {
				this->direction = dir;
			}
		}
		if (countertouch == 2) {
			if (dir_2 != FVector::ZeroVector) {
				dotResult = FVector::DotProduct(this->direction, dir_2);
			}
		}

		if (countertouch == 2) {

			if (dotResult < 0.8f && dotResult > -0.8f) {
				this->direction += dir_2;
				this->direction /= sqrt(2);
			}
			if (dotResult >= 0.8f || dotResult <= -0.8f) {
				if (isLittle)
				{
					size = +1;
					isLittle = false;
				}
				else
				{
					size = -1;
					isLittle = true;
				}
				state = StateAction::Impossible;
			}
		}
	}
}
```

![TestResizing](/gif/ResizingObjectV2.gif)

#### Falling phase (Success)

Once this step is complete, it goes through the phase where its physical state is reset so that it can fall with gravity.

```c++
	FTransform transf = (this->GetOwner()->GetTransform());
	LerpProgress += dt / TimeFloating;
	LerpProgress = FMath::Clamp(LerpProgress, 0, 1.0f);
	transf.SetLocation(FMath::Lerp(start_position, next_position, LerpProgress));
	this->GetOwner()->SetActorTransform(transf);

	if (FVector::Dist(next_position, this->GetOwner()->GetActorLocation()) <= 1.25f) {
		locationFloating = transf.GetLocation();
		state = StateAction::None;
		LerpProgress = 0.0f;
	}
```

#### Abording phase

```c++
FTransform transf = (this->GetOwner()->GetTransform());
transf.SetLocation(locationFloating);
transf.SetScale3D(transf.GetScale3D() + FVector::OneVector * dt * size);
this->GetOwner()->SetActorTransform(transf);

bool isFinished = false;
if (isLittle) {
	if (transf.GetScale3D().Z <= Min3D.Z) {
		transf.SetScale3D(OriginSize);
		this->GetOwner()->SetActorTransform(transf);
		isFinished = true;
	}
}
else {
	if (transf.GetScale3D().Z >= Min3D.Z) {
		transf.SetScale3D(OriginSize);
		this->GetOwner()->SetActorTransform(transf);
		isFinished = true;
	}
}

if (isFinished) {
	if (this->GetOwner()->GetComponentByClass<UInteractable>() != nullptr) {
		this->GetOwner()->GetComponentByClass<UInteractable>()->EnableDistortion = false;

	}
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->SetEnableGravity(true);

	locationFloating = FVector(0, 0, 0);
	state = StateAction::None;
}
```

### Difficulties Encountered

The resizing of objects was difficult due to the lack of knowledge of the physics engine. If an object has multiple components and you enable gravity, the object in the air may not be affected by gravity and will remain immobile. This is because the different components of the object may be interacting with each other in a way that cancels out the effects of gravity.

To solve this problem, you can add a force to the object just after activating its physics. This force will be enough to overcome the interactions between the different components of the object and cause the object to react to gravity in the correct way.

```c++
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->SetSimulatePhysics(true);
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->SetEnableGravity(true);
	this->GetOwner()->GetComponentByClass<UPrimitiveComponent>()->AddForce(FVector::UpVector);
```

## The Boat

The boat's only purpose is to block the players halfway through and to be an object of our puzzle that offers the ability to move only on the water in order to unlock other parts of the levels.

the object in question has a ray-cast detection system that allows it to identify all the objects that are relatively close to it. If one of these objects has a tag defined as "docks", then the object will activate the action that allows you to get off the vehicle.

![Boat](/gif/PawnBoat3.gif)

## The Dropper

A Dropper is a gameplay element that waits for a specific object to be placed in it in order to guide players towards solving certain actions. It does this by using a state machine to guide them through the different steps.

For example, let's take the boat.

### Step 1:

When the player discovers the Dropper, they will see a visual preview of a specific object. This object will be dematerialized, and the player will have previously passed by the real object. This will encourage them to bring it back to the intended location.

![DropperInRequest](/gif/DropperInRequest.gif)

### Step 2:

Once the expected object is given to the Dropper, if the object needs to be enlarged, another animation will play to force the player to perform the necessary action.
![DropperInAction](/gif/DropperInAction.gif)

### Step 3:

If all the steps have been completed, the Dropper will disappear and the object that will allow the puzzle to be unlocked will appear.
![DropperInFinish](/gif/DropperInFinish.gif)

## The Door

The door is the final element that blocks the path of our team. It is an imposing wooden door that represents a barrier/wall of a difficult experience. It pushes our girl to overcome her trauma and free herself from all control over her reality, allowing the other world to invade her little by little and move on to the next level.

Of course, the door requires a key that can be obtained by solving the puzzles in the level.

The door needs a key that can be collected in the level. Therefore, it must have a victory animation to congratulate the players on solving the puzzle and completing the level. This animation will play when the key is collected and the door is opened.
Manager and Trigger Area

![DoorFading](/gif/DoorFading.gif)

## Difficulties Encountered

My lack of knowledge of the Unreal engine blocked me on many different points: Object hierarchy management, Physics engine,Lack of C++ documentation, Lack of manpower. I made a bad choice in prioritizing a prototype in order to have the basic mechanics and validate the game design of our media project. This had the repercussion of working on a project without having total certainty of the final product for the team. This was a major mistake on my part due to a lack of initiative on what is essential!

Regarding the production of the Gameplay, the implementation of mandatory levels to test the different mechanics was an excellent initiative to verify the proper functioning and to quickly discover the problems caused by the modifications and the addition of additional mechanics. Two levels were created: one to test the mechanics in isolation and to perform a battery of specific tests, and another with the assembly of the mechanics to test them simultaneously and to balance and ensure the functioning of the loops.

## Conclusion

My main regret after so much investment in this project is that it is still only in the prototype phase. I wish I had been able to work on the signs and feedback of the different loops to offer a sufficiently correct experience to the players. However, this can be solved in the next few months, since the production phase is ending soon. I will be able to transform this experience and also put my work forward in order to be mainly proud of this new game that will fill my portfolio.
