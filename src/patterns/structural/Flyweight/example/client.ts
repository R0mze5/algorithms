// The Flyweight Use Case Example

/**
In this example, I create a dynamic table with 3 rows and 3 columns each. The columns are then filled with some kind of text, and also chosen to be left, right or center aligned.

The letters are the flyweights and only a code indicating the letter is stored. The letters and numbers are shared many times.

The column cells are the contexts, and they pass the extrinsic vales describing the combination of letters, the justification left, right or center, and the width of the table column that is then used for the space padding.
 */

import Table from "./table";
import FlyweightFactory from "./flyweight-factory";

const TABLE = new Table(3, 3);
TABLE.rows[0].columns[0].data = "abra";
TABLE.rows[0].columns[1].data = "112233";
TABLE.rows[0].columns[2].data = "cadabra";
TABLE.rows[1].columns[0].data = "racadab";
TABLE.rows[1].columns[1].data = "12345";
TABLE.rows[1].columns[2].data = "332211";
TABLE.rows[2].columns[0].data = "cadabra";
TABLE.rows[2].columns[1].data = "445566";
TABLE.rows[2].columns[2].data = "aa 22 bb";

TABLE.rows[0].columns[0].justify = 1;
TABLE.rows[1].columns[0].justify = 1;
TABLE.rows[2].columns[0].justify = 1;
TABLE.rows[0].columns[2].justify = 2;
TABLE.rows[1].columns[2].justify = 2;
TABLE.rows[2].columns[2].justify = 2;
TABLE.rows[0].columns[1].width = 15;
TABLE.rows[1].columns[1].width = 15;
TABLE.rows[2].columns[1].width = 15;

TABLE.draw();

console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`);
