---
author: Dylan von Arx
pubDatetime: 2024-02-05T15:30:34.737Z
title: Blogpost-1
slug: blog-post-1
featured: false
ogImage: images/BlogpostBackgroundx300.png
tags:
  - Sae-Institut
description: Here, you will find the key aspects and different analyses to highlight about the behavior and design of a camera in order to offer an adapted experience to guide the players wisely, the principles not to be neglected throughout a project and the chosen solutions.
info:
  - Scholar
---

## Table of contents

## Introduction

"Girl & Kitty" is a game project set in a melancholic story where the main character will be accompanied by a cat in which together they will solve a multitude of puzzles that will block their path in a setting that intertwines the real and fantastic and dreamlike world or the graphics and the strong point, a camera must therefore be able to meet these expectations: Top-down to Side scroller, Key object, panoramic place, highlighting a specific element, various functionalities that have allowed the design of its behaviors that best transmit the user experience.
The Beginning

The camera in Project Girl & Kitty cannot be directly controlled. The goal is for the player not to have to focus on it and to be able to think about the puzzles instead. It could also be possible to emphasize certain elements in order to better guide the player. The camera angle when it is not highlighting an element is a Top-down. If the level is small enough to be on one screen, the camera will be fixed, but if the level is larger than that, the camera will follow the player by blocking itself on the edges of the level. When the player approaches an interesting element, the camera can position itself to center it, once the player moves away from this point of interest, the camera resumes the player as the center.

## Importance of Objects

The clarity of objects is necessary to lead the players/players sufficiently so that they do not get stuck on trivial details, the goal is not to point the solution directly to them but to accompany them so that they can progress smoothly and that all the mechanics during the learning phases should be as understandable as possible from a distance, only the puzzle phases are the only moments when we should intervene the minimum in order to offer a real Puzzle-game experience.

The objective is to implement a camera behavior that can highlight certain game objects by manipulating its FOV, according to its size, and by interpolating the positions of the player and the object concerned if it is in its zone.

![CameraWithSmoothLerp](/public/gif/KeyObject_CameraWithSmoothLerp.gif)

## Importance of the decor

In a so-called "dreamlike" game where there are no enemies, the players/players have all the time to discover the levels and enjoy its scenery as well as its atmosphere. In order to accentuate this, there is the implementation of view zones with which the camera behavior is altered so that it can make the players/players discover the scenery of the levels. The highlighting of certain places to better define them in order to guide them as the main objective of discovering the next step of the puzzle and as a secondary objective to encourage them to put down their controller in order to just enjoy the panoramas offered by the world design and the level design.
The view zones work by rotating the camera.
![ViewPanoramic](/public/gif/ViewPanoramicWithoutDecor.gif)
![ViewPanoramic](/public/gif/ViewLocationV2.gif)

## Change of Point of View

About 3/4 of the way through the project, there was a total change in the level design of the game, after some external feedback, the choice was made to greatly reduce the depth of the level which required a complete transformation of the camera's point of view by switching from a top-down

to a camera with a Side-scroller behavior, while leaving a certain minimum depth for the movement phases and the right to enlarge this axis if it is a puzzle area.

This required a modification of the camera scripts but fortunately this was only by limiting the parameters on the axis and by readapting all the camera behavior.

but a notorious problem appeared from the passage of point of view, mainly on the positioning of the character on the screen, with the previous point of view that the character was not constantly in the center was not really handicapping because there was a wide field of vision to anticipate what can come into the players/players screen, but with the change of point of view, we notice that the characters stick to the edge of the screen and this completely ruins the fact of seeing the scenery and its objects arrive within the level, a readaptation of the camera behavior in order to calculate its position according to the direction or the character moves.
Two Characters for the Price of One

Once all the above behaviors have been implemented, the main challenge that took a considerable amount of time is the transition of the camera behavior on our two protagonists who can find themselves in completely different situations, modification of the FOV, Camera rotation if the character is in a panoramic zone or outside of limits, ...

## Cinematic Camera (in production)

The objective is to set up a rail on which the camera can move for cinematic phases or when activating certain events. The major difficulty will be to set up a system for adding and modifying rails that is easy to use and with a clear visibility of the trajectories and the different rails. This objective is not yet complete but will be soon.

## Difficulties encountered

In particular, at the time when the project decided to change the camera's point of view from Top-Down 3/4 to a Side-Scroller, the deadline was approaching quickly. The amount of work required was not that time-consuming, but it was a non-negligible objective on top of the fact that I was already drowning in the number of tasks to complete in order to have a minimum of a prototype. The camera behavior was not the problem, but the lack of identity on the project. Even so, to compensate, I organized playtest sessions from time to time and often produced animated images to provide a minimum of follow-up on my tasks. If I had decided to implement a more rigorous follow-up on the playtests in order to get maximum feedback, we could have apprehended these problems autonomously and made decisions more quickly so that this kind of problem would not happen again. However, it is utopian to hope to have no difficulties in the production of a video game.

## Conclusion

There was too much focus on the implementation of the various behaviors, while what was missing throughout the project was a prototype that could validate the essential game design! I greatly lacked flexibility and the importance of the different tasks within the project. But concerning the camera and my first steps in 3D, it was an extremely enriching experience. I regret not being able to take advantage of half of my work, but this resonates with the next prioritizations within a project of this scale. I hope to be able to finalize and highlight all of my work on the game "Girl & Kitty" in the coming months.
