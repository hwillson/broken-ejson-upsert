# broken-ejson-upsert

Reproduction demonstrating broken upserts with using EJSON types.

## Steps

1. `git clone https://github.com/hwillson/broken-ejson-upsert.git`
2. `cd broken-ejson-upsert; meteor npm install; meteor`
3. http://localhost:3000 then watch your browser console. Will throw a "Meteor does not currently support objects other than ObjectID as ids" error, even though the `_id` being used for the upsert is an `ObjectID`.
