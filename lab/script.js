/*eslint-env browser*/

var xhr = new XMLHttpRequest();
xhr.open("GET", "team.xml");
xhr.send();
xhr.onreadystatechange = function () {
    "use strict";
    var xmlDoc, team, html = "", i, teamTag;
    teamTag = window.document.getElementById("team");
    
    if (xhr.readyState === 4 && xhr.status === 200) {
         xmlDoc = xhr.responseXML;
         team = xmlDoc.getElementsByTagName("teammember");
        
        for (i = 0; i < team.length; i += 1) {
            html += "<strong>" + xmlDoc.getElementsByTagName("name")
            [i].childNodes[0].nodeValue + "</strong><br>" +
            xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue 
            + "<br><br>";
        }
        
        teamTag.innerHTML = html;
        
    }
};