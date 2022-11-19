/* eslint-disable no-use-before-define */
/**
 * The composite design pattern is a structural pattern useful for hierarchal management.
 *
 * The Composite design pattern,
 * - allows you to represent individual entities(leaves) and groups of leaves as the same.
 * - is a structural design pattern that lets you composite objects into changeable tree structure.
 * - is great if you need the option of swagging hierarchal relationships around.
 * - allows you to add/remove components to hierarchy.
 * - provides flexibility of structure.
 *
 * Example of using the Composite Design Pattern can be seen in a filesystem directory structure where you can swap the hierarchy of files and folders, and also in a drawing program where you can group, un-group, transform objects and change multiple objects at the same time.
 *
 * Terminology:
 * Component Interface: The interface that all leaves and composites should implement.
 * Leaf: A single object that can exists inside or outside of a composite.
 * Composite: A collections of leaves and/or other composites.
 *
 */

interface ICompositeComponent {
  name: string; // A name for this component
  referenceToParent?: Composite;
  method(): void; // A method each leaf and composite container should implement
  detach(): void; // Called before a leaf is attached to a composite
}

export class Composite implements ICompositeComponent {
  // Composite can contains leaves and composites

  referenceToParent?: Composite;

  components: ICompositeComponent[] = [];

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  method(): void {
    const parent = this.referenceToParent ? this.referenceToParent.name : "none";
    console.log(
      `<Composite>\t\tname:${this.name}\tParent:\t${parent}\tComponents:\t${this.components.length}`
    );
    this.components.forEach((component) => component.method());
  }

  attach(component: ICompositeComponent): void {
    component.detach();
    // eslint-disable-next-line no-param-reassign
    component.referenceToParent = this;
    this.components.push(component);
  }

  delete(component: ICompositeComponent): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }
}

export class Leaf implements ICompositeComponent {
  // A leaf can be added to composite, but not a leaf
  referenceToParent?: Composite;

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }

  method(): void {
    const parent = this.referenceToParent ? this.referenceToParent.name : "none";
    console.log(`<Leaf>\t\tname:${this.name}\tParent:\t${parent}`);
  }
}

const LEAF_A = new Leaf("leaf-a");
const LEAF_B = new Leaf("leaf-b");

const COMPOSITE_1 = new Composite("comp-1");
const COMPOSITE_2 = new Composite("comp-2");

COMPOSITE_1.attach(LEAF_A);
COMPOSITE_2.attach(LEAF_A);
COMPOSITE_2.attach(COMPOSITE_1);

LEAF_B.method();
COMPOSITE_2.method();
