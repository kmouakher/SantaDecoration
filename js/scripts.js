/**
 * Created by khalilmouakher on 05/04/2016.
 */
/**
 *
 * Parse and save entered instructions
 * @param instructions
 * @returns []
 */
function parseInstructions(instructions){
    var instructionsArrays = [];
    var instructionsLinesArray = instructions.split("\n");

    // loop lines
    instructionsLinesArray.forEach(function(line) {
        var lineInstructionArray = line.split(new RegExp(" through |,|turn | ", "g"));
        if ([5,6].indexOf(lineInstructionArray.length) == -1) {
            alert(line + " is bad formatted !");
            return [];
        }
        if (lineInstructionArray.length == 6) lineInstructionArray = lineInstructionArray.slice(1,6);
        instructionsArrays.push([ lineInstructionArray[0].trim(), parseInt(lineInstructionArray[1].trim()), parseInt(lineInstructionArray[2].trim()), parseInt(lineInstructionArray[3].trim()), parseInt(lineInstructionArray[4].trim())]);
    });
    return instructionsArrays;
}

/**
 * Extract datas from instructions and call action
 * @param instructionsArrays
 */
function executeInstructions(instructionsArrays){

    for (var index in instructionsArrays) {
        // process instruction
        var instructionArray = instructionsArrays[index];
        var instructionType = instructionArray[0];
        var startPoint = {   x : instructionArray[1], y: instructionArray[2] };
        var endPoint = { x : instructionArray[3], y: instructionArray[4] };

        // do action
        for (var x1 = parseInt(startPoint['x']); x1 <= parseInt(endPoint['x']); x1++) {
            for (var y1 = parseInt(startPoint['y']); y1 <= parseInt(endPoint['y']); y1++) {
                doInstruction(instructionType, x1, y1);
            }
        }
    }
}


/**
 * check instruction type and change value of point
 * @param instructionType
 * @param x
 * @param y
 */
function doInstruction(instructionType, x, y) {
    var lightisOn = (lightArrays[x][y] == 1);
    switch (instructionType)
    {
        case 'on':      if (!lightisOn) onLight(x, y);
                        break;

        case 'off':     if (lightisOn)  offLight(x, y);
                        break;

        case 'toggle':  (!lightisOn) ? onLight(x, y) : offLight(x, y);
                        break;
    }
}

/**
 * on light and update counter
 */
function onLight(x, y){
    lightArrays[x][y] = 1;
    nbLit++;
}

/**
 * off light and update counter
 */
function offLight(x, y){
    lightArrays[x][y] = 0;
    nbLit--;
}



