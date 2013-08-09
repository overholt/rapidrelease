var releaseDates = JSON.parse(releaseDates);
var mergeDates = JSON.parse(mergeDates);
var now = new Date().getTime();

var nextMerge;
for (var date in mergeDates) {
  var mergeDate = new Date(mergeDates[date].date);
  if (now <= mergeDate.getTime()) {
    nextMerge = mergeDates[date];
    break;
  }
}

var currentRelease = nextMerge.release - 1;
document.writeln("As of today, ", currentRelease, " is in release, ");
document.writeln(currentRelease + 1, " is in beta, ");
document.writeln(currentRelease + 2, " is in aurora, ");
document.writeln("and m-c is ", currentRelease + 3, ".<br>");

document.writeln("The next merge date is ", nextMerge.date, ".<br>");
