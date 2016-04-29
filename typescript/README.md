Because of the lack of a usable UML editor for Typescript I've used IntelliJ's Java-Uml. Typescript .d.ts are close to Java classes, so the diagram helps me to get the big picture.
I investigated mainly the classes in org/hisrc/jsonix/Jsonix/Model to draw it.

This typescript definitions are the first draft and the work is in progress. It's a base to discuss about.
The aims of this branch are:

Defining the public interfaces from the Context (marshaller, unmarshaller)
Defining the internal data types (TypeInfo, PropertyInfo, Mapping)

... a fully migration to TS?

I started with the data types because I need them for my current project

There are still no tests, my suggestion is to use existing ones (and migrating later carefully to TS) but first we have to clear the working process.
E.g.
- Jsonix (sometimes) uses prototype (multiple) inheritance and there is a discussion how to handle this in TS
- how to implement generics (witch would be very usefull)
like createUnmarshaller<T>(type: T): Unmarshaller<T> (doesn't work without changing th jsonix code)



