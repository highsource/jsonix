OGC(r) WPS schema - ReadMe.txt
==============================

OGC(r) Web Processing Service (WPS) Interface Standard 
-----------------------------------------------------------------------

The OGC(r) Web Processing Service (WPS) Interface Standard provides
rules for standardizing how inputs and outputs (requests and responses)
for geospatial processing services, such as polygon overlay. The
standard also defines how a client can request the execution of a
process, and how the output from the process is handled. It defines an
interface that facilitates the publishing of geospatial processes and
clients’ discovery of and binding to those processes. The data required
by the WPS can be delivered across a network or they can be available at
the server.

More information may be found at
 http://www.opengeospatial.org/standards/wps

The most current schema are available at http://schemas.opengis.net/ .

-----------------------------------------------------------------------

2012-08-03  Benjamin Pross
  * v1.0.0: Removed reference to itself in wpsAll.xsd
  * v1.0.0: Updated xsd:schema/@version to 1.0.0.3

2012-07-21  Kevin Stegemoller
  * v1.0.0: WARNING XLink change is NOT BACKWARD COMPATIBLE.
  * Changed OGC XLink (xlink:simpleLink) to W3C XLink (xlink:simpleAttrs)
    per an approved TC and PC motion during the Dec. 2011 Brussels meeting.
    See http://www.opengeospatial.org/blog/1597 
  * v1.0.0: Per 11-025, all leaf documents of a namespace shall retroactively
    and explicitly require/add an <include/> of the all-components schema.
  * v1.0.0: Included wpsAll.xsd as the all-components document (06-135r11 #14)
  * v1.0.0: Updated xsd:schema/@version to 1.0.0.2 (06-135r11 s#13.4)
  * v1.0.0: Updated copyright

2011-02-07  Peter Schut
  * Correct error in ows/1.1.0/owsExceptionReport.xsd as defined in 07-141 

2010-02-03  Kevin Stegemoller
  * v1.0.0: Updated xsd:schema/@version to 1.0.0 2010-02-03 (06-135r7 s#13.4)
  * v1.0.0:
    + Updated xsd:schema/@version attribute (06-135r7 s#13.4)
    + Update relative schema imports to absolute URLs (06-135r7 s#15)
    + Update/verify copyright (06-135r7 s#3.2)
    + Add archives (.zip) files of previous versions
    + Create/update ReadMe.txt (06-135r7 s#17)

2007-12-05  Peter Schut, WPS RWG
  * v1.0.0: Published wps/1.0.0 from OGC 05-007r7
  * v1.0.0: Error in ows/1.1.0 causes validation error see OGC 07-141

*** Note: check each OGC numbered document for detailed changes.

-----------------------------------------------------------------------

Policies, Procedures, Terms, and Conditions of OGC(r) are available
  http://www.opengeospatial.org/ogc/legal/ .

Copyright (c) 2012 Open Geospatial Consortium.

-----------------------------------------------------------------------

