/**
 * Created by khalilmouakher on 05/04/2016.
 */
/**
 *
 * Parse and save datas
 * @param datas
 * @returns {{}}
 */
function parseInstructions(datas){
    var instructionsArrays = [];
    instructionsLinesArray = datas.split("\n");
    instructionsLinesArray.forEach(function(line) {
        lineInstructionArray = line.split(new RegExp(" through |,|turn | ", "g"));
        instructionsArrays.push([lineInstructionArray]);
    });
    return instructionsArrays;
};

function executeInstructions(instructionsArrays){

    $.each(instructionsArrays, function(index, instructionArray){
        // process instruction
        instructionArray = instructionArray[0];
        instructionSize = instructionArray.length;
        startPoint = {
            x : parseInt($.trim(instructionArray[instructionSize-4])),
            y: parseInt($.trim(instructionArray[instructionSize-3]))
        };
        endPoint = {
            x : parseInt($.trim(instructionArray[instructionSize-2])),
            y: parseInt($.trim(instructionArray[instructionSize-1]))
        };
        instructionType = instructionArray[instructionSize-5];

        toggleOnOff(instructionType, startPoint, endPoint);
    });
};


function toggleOnOff(instructionType, startPoint, endPoint){
    //lightArrays
    for (x1 = parseInt(startPoint['x']); x1 <= parseInt(endPoint['x']); x1++) {
        for (y1 = parseInt(startPoint['y']); y1 <= parseInt(endPoint['y']); y1++) {
            doInstruction(instructionType, x1, y1);
        }
    }
}

function doInstruction(instructionType, x1, y1){
    if (instructionType == 'on'){
        lightArrays[x1][y1] = 1;
        nbLit++;
    }else if (instructionType == 'off'){
        lightArrays[x1][y1] = 0;
        nbLit--;
    }else if (instructionType == 'toggle'){
        if (lightArrays[x1][y1] === 0) {
            lightArrays[x1][y1] = 1;
            nbLit++;
        }else {
            lightArrays[x1][y1] = 0;
            nbLit--;
        }

}


}