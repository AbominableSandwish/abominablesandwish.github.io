---
author: Dylan von Arx
pubDatetime: 2024-01-22T15:28:34.737Z
title: Blog Post 2
slug: blog-post-2
featured: false
ogImage: https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png
tags:
  - release
description: Balancing mechanics is the key to a balanced game. The foundation is our characters, who must be able to complement each other perfectly through different abilities and powers. Obsolete powers should be avoided in order to prevent one character from being denigrated. Specific tests should be set up for each mechanic, both for its specific stability and for the stability of all mechanics together. These tests should be used to propose a variety of puzzles to ensure that the game mechanics work throughout the production phase.
info:
  - Scholar
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

## Objects, cubes, the boat, the key, and others...

The two protagonists can interact with certain objects, each with their own specific powers, in order to sometimes collect and use them to continue the level:

### Enlargement/Shrinking

This is a state machine that manages the resizing of objects in order to have total control over their animation. First, the elevation raises the object a few centimeters to simulate a magic manipulation.

Then, the deformation phase manipulates the vertices of the object to improve the simulation of a magic spell.

The main phase is the resizing, during which the object must check if any objects are obstructing its transformation. If so, it moves in the opposite direction. If the objects are on the same axis, then the object is blocked between two others and it abandons its transformation and returns to its initial size for safety.

Once this step is complete, it goes through the phase where its physical state is reset so that it can fall with gravity.

The resizing of objects was difficult due to the lack of knowledge of the physics engine.

## The Boat

The boat's only purpose is to block the players halfway through and to be an object of our puzzle that offers the ability to move only on the water in order to unlock other parts of the levels.

## The Dropper

A Dropper is a gameplay element that waits for a specific object to be placed in it in order to guide players towards solving certain actions. It does this by using a state machine to guide them through the different steps.

For example, let's take the boat.

### Step 1:

When the player discovers the Dropper, they will see a visual preview of a specific object. This object will be dematerialized, and the player will have previously passed by the real object. This will encourage them to bring it back to the intended location.

### Step 2:

Once the expected object is given to the Dropper, if the object needs to be enlarged, another animation will play to force the player to perform the necessary action.

### Step 3:

If all the steps have been completed, the Dropper will disappear and the object that will allow the puzzle to be unlocked will appear.

## The Door

The door is the final element that blocks the path of our team. It is an imposing wooden door that represents a barrier/wall of a difficult experience. It pushes our girl to overcome her trauma and free herself from all control over her reality, allowing the other world to invade her little by little and move on to the next level.

Of course, the door requires a key that can be obtained by solving the puzzles in the level.

The door needs a key that can be collected in the level. Therefore, it must have a victory animation to congratulate the players on solving the puzzle and completing the level. This animation will play when the key is collected and the door is opened.
Manager and Trigger Area

## Difficulties Encountered

My lack of knowledge of the Unreal engine blocked me on many different points:

    Object hierarchy management
    Physics engine
    Lack of C++ documentation
    Lack of manpower

I made a bad choice in prioritizing a prototype in order to have the basic mechanics and validate the game design of our media project. This had the repercussion of working on a project without having total certainty of the final product for the team. This was a major mistake on my part due to a lack of initiative on what is essential!

Regarding the production of the Gameplay, the implementation of mandatory levels to test the different mechanics was an excellent initiative to verify the proper functioning and to quickly discover the problems caused by the modifications and the addition of additional mechanics. Two levels were created: one to test the mechanics in isolation and to perform a battery of specific tests, and another with the assembly of the mechanics to test them simultaneously and to balance and ensure the functioning of the loops.

## Conclusion

My main regret after so much investment in this project is that it is still only in the prototype phase. I wish I had been able to work on the signs and feedback of the different loops to offer a sufficiently correct experience to the players. However, this can be solved in the next few months, since the production phase is ending soon. I will be able to transform this experience and also put my work forward in order to be mainly proud of this new game that will fill my portfolio.
