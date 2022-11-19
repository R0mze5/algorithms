// The Template Pattern Use Case Example

/**
In the example use case, there is an AbstractDocument with several methods, some are optional and others must be overridden.

The document will be written out in two different formats.

Depending on the concrete class used, the text() method will wrap new lines with <p> tags and the print() method will format text with tabs, or include HTML tags.
 */

import TextDocument from "./text-document";
import HTMLDocument from "./html-document";

const TEXT_DOCUMENT = new TextDocument();
TEXT_DOCUMENT.createDocument("Some Text");

const HTML_DOCUMENT = new HTMLDocument();
HTML_DOCUMENT.createDocument("Line 1\nLine 2");
