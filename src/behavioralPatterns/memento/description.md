# Memento Design Pattern

## Overview

Throughout the lifecycle of an application, an objects state may change. You might want to store a copy of the current state in case of later retrieval. E.g., when writing a document, you may want to auto save the current state every 10 minutes. Or you have a game, and you want to save the current position of your player in the level, with its score and current inventory.

You can use the Memento pattern for saving a copy of state and for later retrieval if necessary.

The Memento pattern, like the Command pattern, is also commonly used for implementing UNDO/REDO functionality within your application.

The difference between the Command and the Memento patterns for UNDO/REDO, is that in the Command pattern, you re-execute commands in the same order that changed attributes of a state, and with the Memento, you completely replace the state by retrieving from a cache/store.

## Terminology

* **Originator**: The originator is an object with an internal state that changes on occasion.
* **Caretaker**: (Guardian) A Class that asks the Originator to create or restore Mementos. The Caretaker than saves them into a cache or store of mementos.
* **Memento**: A copy of the internal state of the Originator that can later be restored back into the Originator to replace its current state.
