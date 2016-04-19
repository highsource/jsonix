
Tests gibt es noch nicht, ich denke mein Ansatz dient erst mal der Orientierung und Diskussion.

Die Definitiondatei war ürsprünglich nicht systematisch erstellt, sondern hat sich aus den Anforderungen ergeben, die ich ad hoc beim Verwenden von Jsonix ergeben haben. Dazu hatte ich mir ursprünglich den Context rekursiv (begrenzt auf eine gewisse Tiefe) als JSON.stringify ausgeben lassen und dann bearbeitet, was natürlich nicht so gut die Class-Hierarchie trifft.

Da ich kein professionelles UML-Tool besitze (und schon gar keins, was TS erzeugt, falls es so etwas überhaupt gibt), bin ich auf Java ausgewichen. 
Die Klassen, die in Java erzeugt werden "ähneln" den Design-Pattern von TS, so dass man Ende mit ein paar regulären Ausrücken, den Code umwandeln kann (zu den Interfaces komme ich später. Man könnte das natürlich auch via xmi lösen, das fände ich zum gegenwärtigen Zeitpunkt aber etwas übertrieben.

Die Klassenhierarchie aus 

https://github.com/duschata/jsonix/blob/issue_%23139/typescript/src/main/resources/diagram.svg

war dann Grundlage meines Mappings auf die d.ts (ist mit intelliJ erzeugt).

Die Erzeugung der d.ts ging so weit ganz gut von der Hand, allerdings sehe ich im Diagram noch eine Reihe von nicht zugeordneten Klassen, da müsstest du mir vielleicht noch mal ein paar Beziehungen einzeichnen. Es sind in der d.ts noch nicht alle Typen zu Literalen terminiert, einige Definitionen enden daher noch mit Object, {} oder any, das Ganze ist also noch in progess...

Soweit die d.ts, bei einer vollständigen Migration zu TS sehe ich aber vor allen Dingen folgende Probleme:
Du benutzt in vielen Klassen mehrfach- bzw. prototypische-Vererbung. Das kann man in der d.ts gut über Interfaces abbilden (wie ich es auch gemacht habe), TS selbst unterstützt aber keine Mehrfachvererbung, so dass man an den Stellen in denen Mehrfachvererbung ein Rolle spielt auf das Strategy-Pattern (oder Delegation) ausweichen könnte.
In der Java Uml habe ich einfach Interfaces benutzt, was nicht ganz korrekt ist, aber ja nur der Übersicht dienen soll.

In TS und plain-JS, was d.ts benutzt gibt es keinen wirklich funktionierende instanceof Implementierung. Das generierte JS weiß quasi nichts von den Klassen, die in TS definiert sind. Der Code "weiß", wenn er eine TypeInfo verarbeitet nicht, ob es nicht vielleicht eine ClassInfo ist. Jsonix benutzt hier in jeder Klasse ein CLASS_NAME Feld, das konnte ich in die Interfaces nicht aufnehmen, da sie keinen Initializer besitzten dürfen (das Problem sollte aber erledigt sein, wenn man Klassen definiert, die ein CLASS_NAME Feld besitzen können).







 






 