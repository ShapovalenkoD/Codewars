// My solution
var multipleOf3Regex = /^(0|1(01*0)*1)*$/

// Top solution
var multipleOf3Regex = /^(0*(1(1|(01*0)+1))*)*$/;

/* Breakdown, based on automata:

 ^ - start
 ( - outer grouping (to enfore start/end)
 - start in A
 0* - zero or more '0'
 ( - A
 1 - exit A on a 1 (enter B)
 ( - B
 1 - exit B on a 1 (enter A)
 | - or exit B on a 0 (enter C)
 01*0 - C must enter and exit on a 0, can have zero-or-more 1's
 )+ - repeat B
 1 - exit C then B on a 1
 ) - End B
 )* - repeat A
 )* - repeat everything
 $ - end

 */