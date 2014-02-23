mkdir src/main/webapp/po/js/PO
java -jar lib/jsonix-schema-compiler-full-${project.version}.jar -d src/main/webapp/js src/main/resources/purchaseorder.xsd -b src/main/resources/bindings.xjb