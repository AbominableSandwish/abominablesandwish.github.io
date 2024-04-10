---
author: Dylan von Arx
pubDatetime: 2024-02-05T13:30:34.737Z
title: Blogpost-1
slug: blog-post-1
featured: false
ogImage: images/sae_institute_genve_cover.jpg
tags:
  - Sae-Institut
description: Here, you will find the key aspects and different analyses to highlight about the behavior and design of a camera in order to offer an adapted experience to guide the players wisely, the principles not to be neglected throughout a project and the chosen solutions.

furtherInfo: false

info:
  - Scholar
canPlaying: false

hasVideo: false
---

## Table of contents

## Introduction

"Girl & Kitty" is a game project set in a melancholic story where the main character will be accompanied by a cat in which together they will solve a multitude of puzzles that will block their path in a setting that intertwines the real and fantastic and dreamlike world or the graphics and the strong point, a camera must therefore be able to meet these expectations: Top-down to Side scroller, Key object, panoramic place, highlighting a specific element, various functionalities that have allowed the design of its behaviors that best transmit the user experience.
The Beginning

![Decor](/gif/FireFly.gif)

The camera in Project Girl & Kitty cannot be directly controlled. The goal is for the player not to have to focus on it and to be able to think about the puzzles instead. It could also be possible to emphasize certain elements in order to better guide the player. The camera angle when it is not highlighting an element is a Top-down. If the level is small enough to be on one screen, the camera will be fixed, but if the level is larger than that, the camera will follow the player by blocking itself on the edges of the level. When the player approaches an interesting element, the camera can position itself to center it, once the player moves away from this point of interest, the camera resumes the player as the center.

## Importance of Objects

The clarity of objects is necessary to lead the players/players sufficiently so that they do not get stuck on trivial details, the goal is not to point the solution directly to them but to accompany them so that they can progress smoothly and that all the mechanics during the learning phases should be as understandable as possible from a distance, only the puzzle phases are the only moments when we should intervene the minimum in order to offer a real Puzzle-game experience.

how an object sets its attributes

```c++
void UCameraPro::SetKeyObject(UKeyObject& inputKey, int focusCharacter)
{
	this->states[focusCharacter].targetKey = true;
	if (this->states[focusCharacter].key == nullptr || inputKey.layer == 1) {
		this->states[focusCharacter].key = &inputKey;
	}
	else {
		this->states[focusCharacter].key2 = &inputKey;
	}

	switch ((&this->states[focusCharacter].GetKey())->GetType())
	{
	case (int)ObjectType::None:
		if (this->camera->GetFOVAngle() < origin_fov + MaxFOV) {
			dir_fov = +1;
			next_fov = origin_fov + MaxFOV;
		}
		if (this->camera->GetFOVAngle() > origin_fov - MaxFOV) {
			dir_fov = -1;
			next_fov = origin_fov - MaxFOV;
		}
		break;
	case (int)ObjectType::Tiny:
		if (this->camera->GetFOVAngle() > origin_fov - MaxFOV) {
			dir_fov = -1;
			next_fov = origin_fov - MaxFOV;
		}
		break;
	case (int)ObjectType::Big:
		if (this->camera->GetFOVAngle() < origin_fov + MaxFOV) {
			dir_fov = +1;
			next_fov = origin_fov + MaxFOV;
		}
		break;
	}
}
```

How the camera calculates the field of view

```c++
//Fov Control
UKeyObject* currentKey = &this->states[FocusCharacter].GetKey();
bool currentTargetKey = this->states[FocusCharacter].targetKey;

bool updateFov = true;
if (updateFov) {
	if (currentKey != nullptr) {
		if (this->states[FocusCharacter].targetKey) {
			if (alpha < 0.5f) {
				alpha += DeltaTime;
			}
			else {
				alpha = 0.5f;
			}
		}
		if (!this->states[FocusCharacter].targetKey) {
			if (alpha > 0) {
				alpha -= DeltaTime;
			}
			else {
				alpha = 0;
				this->states[FocusCharacter].SetKey(nullptr);
			}
		}

		X = currentKey->GetOwner()->GetTransform().GetLocation().X;
		Y = currentKey->GetOwner()->GetTransform().GetLocation().Y;

		FVector positionKey = FVector(X, Y, positionTarget.Z);
		dir_Y = std::lerp(positionTarget.Y, positionKey.Y, alpha)
      - transformCamera.GetLocation().Y;
		dir_X = std::lerp(positionTarget.X, positionKey.X, alpha)
      - transformCamera.GetLocation().X - offsetCamera.X;
	}
}

if (dir_fov < 0) {
	if (this->camera->GetFOVAngle() > next_fov) {
		this->camera->SetFOV(DeltaTime * velocity_fov * dir_fov
      + this->camera->GetFOVAngle());
	}
	else {
		this->camera->SetFOV(next_fov);
		dir_fov = 0;
	}
}
if (dir_fov > 0) {
	if (this->camera->GetFOVAngle() < next_fov) {
		this->camera->SetFOV(DeltaTime * velocity_fov * dir_fov
      + this->camera->GetFOVAngle());
	}
	else {
		this->camera->SetFOV(next_fov);
		dir_fov = 0;
	}
}
```

The objective is to implement a camera behavior that can highlight certain game objects by manipulating its FOV, according to its size, and by interpolating the positions of the player and the object concerned if it is in its zone.

![CameraWithSmoothLerp](/gif/KeyObject_CameraWithSmoothLerp.gif)

## Importance of the decor

In a so-called "dreamlike" game where there are no enemies, the players/players have all the time to discover the levels and enjoy its scenery as well as its atmosphere. In order to accentuate this, there is the implementation of view zones with which the camera behavior is altered so that it can make the players/players discover the scenery of the levels. The highlighting of certain places to better define them in order to guide them as the main objective of discovering the next step of the puzzle and as a secondary objective to encourage them to put down their controller in order to just enjoy the panoramas offered by the world design and the level design.
The view zones work by rotating the camera.

```c++
void UCameraPro::CalcCameraRotation(float DeltaTime) {
  if (this->states[FocusCharacter].is_look_target) {
	  if (beta < 1.0f) {
		  beta += DeltaTime;
	  }
	  else {
	  	beta = 1.0f;
	  }

	  FVector PositionPlayer = target->GetActorLocation();
	  if(PositionPlayer.X > internal_position.X) {
	  	PositionPlayer = FVector(internal_position.X, PositionPlayer.Y, PositionPlayer.Z);
	  }
	  external_position = (PositionPlayer - internal_position);

	  if(isDebug)
		  DebugCameraRotation(DeltaTime);
  }
  else {
	  if (beta > 0.0f) {
		  beta -= DeltaTime;
	  }
	  else {
		  beta = 0.0f;
	  }
  }
}
```

Version without decor
![ViewPanoramicWithoutDecor](/gif/ViewPanoramicWithoutDecor.gif)
Version with decor
![ViewPanoramicWithDecor](/gif/ViewLocationV2.gif)

## Change of Point of View

About 3/4 of the way through the project, there was a total change in the level design of the game, after some external feedback, the choice was made to greatly reduce the depth of the level which required a complete transformation of the camera's point of view by switching from a top-down

Top-down
![Top-Down](/gif/Limit_Camera.gif)

to a camera with a Side-scroller behavior, while leaving a certain minimum depth for the movement phases and the right to enlarge this axis if it is a puzzle area.
This required a modification of the camera scripts but fortunately this was only by limiting the parameters on the axis and by readapting all the camera behavior.

but a notorious problem appeared from the passage of point of view, mainly on the positioning of the character on the screen, with the previous point of view that the character was not constantly in the center was not really handicapping because there was a wide field of vision to anticipate what can come into the players/players screen, but with the change of point of view, we notice that the characters stick to the edge of the screen and this completely ruins the fact of seeing the scenery and its objects arrive within the level, a readaptation of the camera behavior in order to calculate its position according to the direction or the character moves.

How to calculate the offset

```c++
//If the character is within the camera zone
if (inLimit) {
	if (LastPositionTarget != positionTarget) {
		LastPositionTarget = positionTarget;
		if (last_DirY != 0 && dir_Y != 0) {
			if (last_DirY < 0) {
				if (dir_Y < 0) {
					if (offsetY + positionTarget.Y > areaLimitMin.Y) {
						if (offsetY > 0) {
							offsetY -= DeltaTime * 300;
						}
						else {
							offsetY -= DeltaTime * 150;
						}
						if (offsetY < -150.0f) {
							offsetY = -150.0f;
						}
					}
				}
			}
			if (last_DirY > 0) {
				if (dir_Y > 0) {
					if (offsetY < 0) {
						offsetY += DeltaTime * 300;
					}
					else {
						offsetY += DeltaTime * 150;
					}
					if (offsetY > 150.0f) {
						offsetY = 150.0f;
					}
				}
			}
		}

	}
}
else {
	if (offsetY + positionTarget.Y < areaLimitMin.Y) {
		if (offsetY + positionTarget.Y < positionTarget.Y) {
			offsetY += DeltaTime * 300;
		}
	}
	if (offsetY + positionTarget.Y > areaLimitMin.Y) {
		if (offsetY + positionTarget.Y > positionTarget.Y) {
			offsetY -= DeltaTime * 300;
		}
	}
}
```

Side-Scroller
![Side-Scroller](/gif/SideScroller.gif)

##Two Characters for the Price of One

Once all the above behaviors have been implemented, the main challenge that took a considerable amount of time is the transition of the camera behavior on our two protagonists who can find themselves in completely different situations, modification of the FOV, Camera rotation if the character is in a panoramic zone or outside of limits, ...

```c++
class UKeyObject;

struct StateTarget
{
	UKeyObject* key = nullptr;
	UKeyObject* key2 = nullptr;
	bool targetKey = false;
	bool is_look_target = false;

	UKeyObject& GetKey() {
		if (key2 != nullptr)
			return *key2;
		return *key;
	}

	void SetKey(UKeyObject* new_key) {
		if (key2 != nullptr) {
			this->key2 = new_key;
			return;
		}
		this->key = new_key;
	}
}

std::vector<StateTarget> states;
int FocusCharacter = 0;
```

Example of swap
![SwapCamera1](/gif/SwapCamera.gif)
![SwapCamera2](/gif/SwapCamera_2.gif)

## Cinematic Camera (in production)

The objective is to set up a rail on which the camera can move for cinematic phases or when activating certain events. The major difficulty will be to set up a system for adding and modifying rails that is easy to use and with a clear visibility of the trajectories and the different rails. This objective is not yet complete but will be soon.

## Difficulties encountered

In particular, at the time when the project decided to change the camera's point of view from Top-Down 3/4 to a Side-Scroller, the deadline was approaching quickly. The amount of work required was not that time-consuming, but it was a non-negligible objective on top of the fact that I was already drowning in the number of tasks to complete in order to have a minimum of a prototype. The camera behavior was not the problem, but the lack of identity on the project. Even so, to compensate, I organized playtest sessions from time to time and often produced animated images to provide a minimum of follow-up on my tasks. If I had decided to implement a more rigorous follow-up on the playtests in order to get maximum feedback, we could have apprehended these problems autonomously and made decisions more quickly so that this kind of problem would not happen again. However, it is utopian to hope to have no difficulties in the production of a video game.

## Conclusion

There was too much focus on the implementation of the various behaviors, while what was missing throughout the project was a prototype that could validate the essential game design! I greatly lacked flexibility and the importance of the different tasks within the project. But concerning the camera and my first steps in 3D, it was an extremely enriching experience. I regret not being able to take advantage of half of my work, but this resonates with the next prioritizations within a project of this scale. I hope to be able to finalize and highlight all of my work on the game "Girl & Kitty" in the coming months.
