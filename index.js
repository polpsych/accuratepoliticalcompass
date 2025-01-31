// Globals
// Quadrant colors
const RED = '#ff7575';
const BLUE = '#42aaff';
const GREEN = '#9aed97';
const YELLOW = '#f5f471';
// Mapping of questions to a dict of their weights for each political value
const questions = {
    "1. Intellectual property is a legitimate concept.":
        [0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "2. The benefits of automation outweigh the costs.": 
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    "3. Some ideas are too dangerous to be given consideration.":
        [0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0],
    "4. Health care should be free.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "5. Nature has no inherent value.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "6. Free markets are vital to our prosperity.":
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    "7. Local power should be more significant than national power.":
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    "8. Theft can never be justified.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "9. The industrial revolution was a required step in human history.":
        [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "10. Prostitution should be allowed.":
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    "11. Women are naturally more nurturing than men.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    "12. No one but me can adequately represent my political views.":
        [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
    "13. There are moral rules which should never be broken.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0],
    "14. Gay marriage should be legal.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "15. Competition drives innovation.":
        [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0],
    "16. A strong capable government allows a nation to thrive.":
        [0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0],
    "17. Tyranny by majority is a legitimate concern.":
        [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
    "18. Life without the state would be nasty, brutish and short.":
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "19. Welfare for disabled people should be cut.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "20. Multiculturalism is amongst our society's most prized ideals.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0],
    "21. Politicians should not exist.":
        [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
    "22. We should replace the central bank with alternate credit forms, such as free banking.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "23. Authorities should not be questioned as long as they provide stability.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "24. The topic of classism should be taught about alongisde racism, sexism and homophobia.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0],
    "25. It's not healthy for children to be raised by gay couples.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "26. Gender should be abolished.":
        [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5],
    "27. Social media companies are entitled to moderate their own content.":
        [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
    "28. All hierarchies should be dismantled.":
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    "29. Euthanasia should be legal.":
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    "30. We should discourage the consumption of harmful products through taxes.":
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    "31. Proportional representation of minorities should be mandatory in workplaces.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    "32. Bosses know what's best for their workers.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "33. We should move away from money.":
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    "34. International climate change agreements are important to saving the planet.":
        [0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0],
    "35. We should not consider that nature is sacred in any fundamental way.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
    "36. Strong immigration rates are important for our society.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    "37. Certain ethnic groups are genetically predisposed to violence.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "38. There should be a universal right to a job.":
        [0, 0, 1, 0, 20, 0, 0, 0, 0, 0, 0, 0],
    "39. It is better for different peoples to stay in their own communities.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    "40. A party of revolutionaries should lead the workers against capitalism.":
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "41. Most large businesses are essentially criminal.":
        [1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
    "42. Our involvement in foreign wars is usually justified.":
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "43. It's wasteful to have so many different brands of the same good.":
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "44. Some sexual orientations are to be socially favored.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    "45. Government surveillance should be prohibited.":
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    "46. All marginalized minorities should have solidarity with each other.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    "47. Traditional gender roles are optimal.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    "48. Men make better leaders than women.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "49. Property shouldn't be held by few select individuals.":
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "50. There shouldn't be any national borders.":
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "51. Sometimes, vigilante justice is necessary.":
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    "52. Firearms should be available to the general public.":
        [0, 0, 0, 0, 0, 20, 20, 0, 0, 0, 0, 0],
    "53. Hate speech against minorities should be a crime.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0],
    "54. One can never truly separate the individual from society.":
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "55. One world government is desirable.":
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "56. My culture is worth protecting.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    "57. Profession groups performing their function are how the economy should be run.":
        [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "58. Nomadic cultures have a wiser relationship with the land than we do.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    "59. Landlords provide an important service.":
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "60. Expertise, not popular approval, represents best the worth of a ruler.":
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "61. Discrimination against obese people is unacceptable.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "62. We should consider decriminalization for many personal liberties.":
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    "63. We should return to a simpler, less materialistic way of living.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    "64. Some pornography should be banned.":
        [0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0],
    "65. Some cultural groups tend to work harder than others.":
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    "66. We shouldn't let people do things which will put them in danger.":
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    "67. News reports are accurate most of the time.":
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "68. Like-minded individuals should form self-governing communities.":
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    "69. Life is more unfulfilling the closer you get to the city center.":
        [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
    "70. Leadership should be passed on hereditarily.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "71. It is important to respect religion.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    "72. There should be certain rules and standards that apply across all of society.":
        [0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0],
    "73. Gathering of personal data by companies is justified.":
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "74. Religious authority should never grant political power.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "75. Many industries are so important that we shouldn't leave them in the private sector.":
        [0, 0, 1, 0, 20, 0, 0, 0, 0, 0, 0, 0],
    "76. Inheritance should be abolished.":
        [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    "77. Economic actions by the government should be moderate.":
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    "78. People should not be treated differently because of their origin.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "79. Workers deserve a greater part of what they create.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "80. Deportation should be used to ensure ethnic homogeneity.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "81. Foreign investments are to be welcomed.":
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "82. Nothing is sacred, and we should embrace this.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    "83. There should be corporate responsibility in every business.":
        [0, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0, 0],
    "84. It's necessary to break taboos.":
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    "85. Workers in essential parts of the economy should not be allowed to strike.":
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};
// Mapping of Political Values to their Indices in the questions dict
const valueMap = {
    "equality": 0,
    "property": 1,
    "coordination": 2,
    "commerce": 3,
    "dominion": 4,
    "anarchy": 5,
    "permission": 6,
    "restriction": 7,
    "inclusivity": 8,
    "supremacy": 9,
    "heritage": 10,
    "novelty": 11
};
// Individual Political Value percentages generated at the time of the results
var valuePercentages = {
    "equalityDec": 0,
    "coordinationDec": 0,
    "dominionDec": 0,
    "permissionDec": 0,
    "inclusivityDec": 0,
    "heritageDec": 0
};
// Index of the currently shown question on the page
let currQuestionIdx = 0;
// List of all the possible answers to each question
const selectionChoices = {
    0: "Strongly Disagree",
    1: "Disagree",
    2: "Neutral",
    3: "Agree",
    4: "Strongly Agree"
};
const selectionChoicesRev = {
    "Strongly Disagree": 0,
    "Disagree": 1,
    "Neutral": 2,
    "Agree": 3,
    "Strongly Agree": 4
}

function generateChoices(parent, questionCount) {
    // Disagree text
    const disagree = document.createElement("label");
    disagree.textContent = "Disagree ";
    parent.appendChild(disagree);
    // Selection buttons
    for (let i = 0; i < Object.keys(selectionChoices).length; i++) {
        const label = document.createElement("label");
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.style.display = "none"; // Hides the radio button itself
        radioButton.name = questionCount; // This is the question number
        radioButton.id = selectionChoices[i];
        radioButton.value = selectionChoices[i];
        if (i == 0) {
            label.className = "label-d";
            label.textContent = "❮❮";
        } else if (i == 1) {
            label.className = "label-d";
            label.textContent = "❮"; 
        } else if (i == 2) {
            label.className = "label-n";
            label.textContent = "❮❯";
        } else if (i == 3) {
            label.className = "label-a";
            label.textContent = "❯";
        } else if (i == 4) {
            label.className = "label-a";
            label.textContent = "❯❯";
        }
        radioButton.onclick = nextButton; // Automatically cycle to the next question
        label.style.display = "inline-block"; // Arranges the label buttons into a row
        label.appendChild(radioButton);
        parent.appendChild(label);
    }
    // Agree text
    const agree = document.createElement("label");
    agree.textContent = " Agree";
    parent.appendChild(agree);
}

function displayQuestions() {
    let questionsClass = document.querySelector(".questions");
    const questionKeys = Object.keys(questions);
    let questionCount = 0;
    questionKeys.forEach(value=>{
        // Question Text
        const question = document.createElement("a");
        question.innerHTML = value + "<br/>" + "<br/>";
        question.className = "question";
        question.id = "question" + currQuestionIdx;
        currQuestionIdx += 1
        if (currQuestionIdx == 1) {
            question.hidden = false;
        } else {
            question.hidden = true;
        }
        questionsClass.appendChild(question);
        generateChoices(question, questionCount);
        questionCount += 1;
    })
    currQuestionIdx = 0;
}

function displayButtons(idx) {
    let prevButton = document.querySelector(".prevButton");
    let submitButton = document.querySelector(".submitButton");
    // Previous Button
    if (idx >= 1) {
        prevButton.hidden = false;
    } else {
        prevButton.hidden = true;
    }
    // Submit Button
    if (idx == 84) {
        submitButton.hidden = false;
    } else {
        submitButton.hidden = true;
    }
}

function hideCurrQuestion() {
    let idName = "question" + currQuestionIdx;
    let question = document.getElementById(idName);
    question.hidden = true;
}

function showCurrQuestion() {
    idName = "question" + currQuestionIdx;
    let question = document.getElementById(idName);
    question.hidden = false;
}

function nextButton() {
    if (currQuestionIdx < 84) {
        hideCurrQuestion();
        // Show next question
        currQuestionIdx += 1;
        showCurrQuestion();
        displayButtons(currQuestionIdx);
    }
}

function prevButton() {
    hideCurrQuestion();
    // Show previous question
    currQuestionIdx -= 1;
    showCurrQuestion();
    displayButtons(currQuestionIdx);
}

// Calculates the sums for all Political Values, based on question weights
function calcValueSums() {
    const questionValues = Object.entries(questions);
    let sums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Get the value weights for each question
    questionValues.forEach(value=>{
        for (let i = 0; i < sums.length; i++) {
            sums[i] += value[1][i];
        }
    });
    return sums;
}

function calcResponseScores() {
    let questionObjs = document.querySelectorAll(".question");
    let responses = []; // Will hold a numerical representation of the responses
    questionObjs.forEach(value=>{
        currResponse = value.querySelector(":checked");
        if (currResponse) {
            responses.push(selectionChoicesRev[currResponse.value]);
        }
    });
    return responses
}

// Calculates the weighted sum for a given Political Value Index
function calcWeightedSum(valueIdx) {
    // Note - The below are sets of dummy values for testing.
    // User 1
    // let responseScores = [2, 2, 3, 4, 0, 3, 3, 1, 2, 2, 2, 3, 3, 4, 3, 3, 3, 4, 0, 3, 2, 2, 0, 4, 0, 2, 4, 4, 2, 2, 4, 2, 3, 4, 0, 3, 0, 3, 0, 4, 3, 0, 2, 0, 2, 3, 0, 0, 4, 3, 3, 2, 3, 2, 2, 3, 3, 3, 1, 3, 2, 3, 3, 4, 3, 1, 2, 2, 0, 0, 2, 3, 2, 3, 3, 2, 2, 4, 4, 0, 3, 1, 3, 3, 0];
    // User 2
    // let responseScores = [3, 2, 4, 4, 0, 2, 2, 3, 3, 1, 3, 4, 3, 4, 3, 3, 2, 1, 0, 2, 2, 2, 2, 3, 1, 2, 1, 2, 0, 1, 3, 0, 2, 4, 0, 3, 1, 3, 0, 2, 3, 1, 3, 2, 3, 3, 1, 0, 3, 2, 3, 0, 4, 1, 2, 3, 2, 3, 1, 3, 4, 3, 3, 2, 3, 3, 3, 1, 1, 0, 3, 3, 1, 4, 2, 2, 2, 3, 4, 0, 2, 1, 4, 2, 1]
    // Assembles responses as a numerical array (0 = SD, 1 = D, ... , 4 = SA)
    let responseScores = calcResponseScores();
    let weightedSum = 0;
    for(let i = 0; i < responseScores.length; i++) {
        currQuestionWeights = Object.entries(questions)[i][1]
        valueWeight = currQuestionWeights[valueIdx];
        weightedSum += valueWeight * responseScores[i];
    }
    return weightedSum;
}

function calcRightLeftCoord() {
    // Calculate the sums
    let totalSums = calcValueSums();
    let equalitySum = totalSums[valueMap["equality"]];
    let propertySum = totalSums[valueMap["property"]];
    let coordinationSum = totalSums[valueMap["coordination"]];
    let commerceSum = totalSums[valueMap["commerce"]];
    // Calculate intermediate values
    let equalityVsProperty = (equalitySum * 4) + (propertySum * 4);
    let coordinationVsCommerce = (coordinationSum * 4) + (commerceSum * 4);
    let rightP = (equalityVsProperty + coordinationVsCommerce);
    let equalityVsPropertyDec = equalityVsProperty / rightP;
    let coordinationVsCommerceDec = coordinationVsCommerce / rightP;
    let weightedEqualitySum = calcWeightedSum(valueMap["equality"]);
    let weightedPropertySum = calcWeightedSum(valueMap["property"]);
    // Equality Decimal
    let d170 = weightedEqualitySum - weightedPropertySum;
    let d140 = equalitySum * 4;
    let e140 = propertySum * 4;
    let equalityDec = ((d170 / (d140 + e140)) + (e140 / (d140 + e140)));
    valuePercentages["equalityDec"] = equalityDec;
    // Property Decimal
    let propertyDec = 1 - equalityDec
    // Commerce Decimal
    let weightedCoordinationSum = calcWeightedSum(valueMap["coordination"]);
    let weightedCommerceSum = calcWeightedSum(valueMap["commerce"]);
    let coordinationDec = ((weightedCoordinationSum - weightedCommerceSum) / coordinationVsCommerce) + ((commerceSum * 4) / coordinationVsCommerce);
    valuePercentages["coordinationDec"] = coordinationDec;
    let commerceDec = 1 - coordinationDec;
    // Final Result
    let rightLeftCoord = 100 * ((propertyDec * equalityVsPropertyDec) + (commerceDec * coordinationVsCommerceDec));
    return rightLeftCoord;
}

function calcAuthLibCoord() {
    // Calculate the sums
    let totalSums = calcValueSums();
    let dominionSum = totalSums[valueMap["dominion"]];
    let anarchySum = totalSums[valueMap["anarchy"]];
    let permissionSum = totalSums[valueMap["permission"]];
    let restrictionSum = totalSums[valueMap["restriction"]];
    let inclusivitySum = totalSums[valueMap["inclusivity"]];
    let supremacySum = totalSums[valueMap["supremacy"]];
    let heritageSum = totalSums[valueMap["heritage"]];
    let noveltySum = totalSums[valueMap["novelty"]];
    // Calculate intermediate values
    let authP = (dominionSum * 4) + (anarchySum * 4) + (permissionSum * 4) + (restrictionSum * 4) + (inclusivitySum * 4) + (supremacySum * 4) + (heritageSum * 4) + (noveltySum * 4);
    let dominionVsAnarchy = (dominionSum * 4) + (anarchySum * 4);
    let dominionVsAnarchyDec = dominionVsAnarchy / authP;
    // Political Value Weighted Sums
    let weightedDominionSum = calcWeightedSum(valueMap["dominion"]);
    let weightedAnarchySum = calcWeightedSum(valueMap["anarchy"]);
    let weightedPermissionSum = calcWeightedSum(valueMap["permission"]);
    let weightedRestrictionSum = calcWeightedSum(valueMap["restriction"]);
    let weightedInclusivitySum = calcWeightedSum(valueMap["inclusivity"]);
    let weightedSupremacySum = calcWeightedSum(valueMap["supremacy"]);
    let weightedHeritageSum = calcWeightedSum(valueMap["heritage"]);
    let weightedNoveltySum = calcWeightedSum(valueMap["novelty"]);
    // Dominion Decimal
    let h170 = weightedDominionSum - weightedAnarchySum;
    let h140 = dominionSum * 4;
    let i140 = anarchySum * 4;
    let dominionDec = ((h170 / (h140 + i140)) + (i140 / (h140 + i140)));
    valuePercentages["dominionDec"] = dominionDec; 
    // Permission Decimal
    let j170 = weightedPermissionSum - weightedRestrictionSum;
    let j140 = permissionSum * 4;
    let k140 = restrictionSum * 4;
    let permissionDec = ((j170 / (j140 + k140)) + (k140 / (j140 + k140)));
    valuePercentages["permissionDec"] = permissionDec;
    // Restriction Decimal
    let restrictionDec = 1 - permissionDec;
    // Inclusivity Decimal
    let l170 = weightedInclusivitySum - weightedSupremacySum;
    let l140 = inclusivitySum * 4;
    let m140 = supremacySum * 4;
    let inclusivityDec = ((l170 / (l140 + m140)) + (m140 / (l140 + m140)));
    valuePercentages["inclusivityDec"] = inclusivityDec;
    // Supremacy Decimal
    let supremacyDec = 1 - inclusivityDec;
    // Heritage Decimal
    let n170 = weightedHeritageSum - weightedNoveltySum;
    let n140 = heritageSum * 4;
    let o140 = noveltySum * 4;
    let heritageDec = ((n170 / (n140 + o140)) + (o140 / (n140 + o140)));
    valuePercentages["heritageDec"] = heritageDec;
    let permissionVsRestriction = (permissionSum * 4) + (restrictionSum * 4);
    let permissionVsRestrictionDec = permissionVsRestriction / authP;
    let inclusivityVsSupremacy = (inclusivitySum * 4) + (supremacySum * 4);
    let inclusivityVsSupremacyDec = inclusivityVsSupremacy / authP;
    let heritageVsNovelty = (heritageSum * 4) + (noveltySum * 4);
    let heritageVsNoveltyDec = heritageVsNovelty / authP;
    // Final Result
    let authLibCoord = 100 * ((dominionDec * dominionVsAnarchyDec) + (restrictionDec * permissionVsRestrictionDec) + (supremacyDec * inclusivityVsSupremacyDec) + (heritageDec * heritageVsNoveltyDec));
    return authLibCoord;
}

function drawPercentageBar(parent, percentageBar, leftStr, rightStr) {
    let left = document.createElement("label");
    leftPercent = percentageBar.value;
    left.textContent = leftStr + " (" + leftPercent.toFixed(0) + "%) ";
    left.className = "percentage-row";
    let right = document.createElement("label");
    let rightPercent = 100 - percentageBar.value;
    right.textContent = " " + rightStr + " (" + rightPercent.toFixed(0) + "%)";
    right.className = "percentage-row";
    parent.appendChild(left);
    parent.appendChild(percentageBar);
    parent.appendChild(right);
    return
}

function displayPercentages() {
    const percentages = Object.entries(valuePercentages);
    for(let i = 0; i < percentages.length; i++) {
        const categories = document.getElementById("categories");
        const percentageBar = document.createElement("progress");
        percentageBar.max = "100";
        percentageBar.value = percentages[i][1] * 100;
        percentageBar.className = "percentage-row";
        if (i == 0) { // Equality vs Property
            drawPercentageBar(categories, percentageBar, "Equality", "Property");
        } else if (i == 1) { // Coordination vs Commerce
            drawPercentageBar(categories, percentageBar, "Coordination", "Commerce");                
        } else if (i == 2) { // Dominion vs Anarchy
            drawPercentageBar(categories, percentageBar, "Dominion", "Anarchy");
        } else if (i == 3) { // Permission vs Restriction
            drawPercentageBar(categories, percentageBar, "Permission", "Restriction");
        } else if (i == 4) { // Inclusivity vs Supremacy
            drawPercentageBar(categories, percentageBar, "Inclusivity", "Supremacy");
        } else if (i == 5) { // Heritage vs Novelty
            drawPercentageBar(categories, percentageBar, "Heritage", "Novelty");
        }
        categories.appendChild(document.createElement("br")); // Line break between bars
    }
    return
}

function submitButton() {
    let rightLeftCoord = calcRightLeftCoord();
    let authLibCoord = calcAuthLibCoord();
    // Coordinates
    let data = [{x: rightLeftCoord, y:authLibCoord}];
    // Hide the questions now that it has been submitted
    let questionsObj = document.querySelector(".questions-outer");
    questionsObj.hidden = true;
    // Hide the submit button now that the result has been submitted
    let submitButton = document.querySelector(".submitButton");
    submitButton.hidden = true;
    // Configure and setup the chart
    let container = document.getElementById("container");
    const resultsData = [ 
        {x: rightLeftCoord, y:authLibCoord}
    ];
    const quadrants = {
        id: 'quadrants',
        beforeDraw(chart, args, options) {
            // Draws each quadrant in a different color
            const {ctx, scales: {x, y}} = chart;
            ctx.save();
            ctx.fillStyle = options.topLeft;
            ctx.fillRect(57, 11, 138, 138); // Top Left
            ctx.fillStyle = options.topRight;
            ctx.fillRect(197, 11, 139, 138); // Top Right
            ctx.fillStyle = options.bottomRight;
            ctx.fillRect(197, 150, 139, 138); // Bottom Right
            ctx.fillStyle = options.bottomLeft;
            ctx.fillRect(57, 150, 139, 138); // Bottom Left
            // Draws the gridlines overtop the quadrants
            // Vertical gridline
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.moveTo(196, 11);
            ctx.lineTo(196, 288);
            ctx.lineWidth = 2;
            ctx.stroke();
            // Horizontal gridline
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.moveTo(57, 150);
            ctx.lineTo(336, 150);
            ctx.lineWidth = 2;
            ctx.stroke();
            // Restore the chart
            ctx.restore();
        }
    };
    const config = { 
        type: 'scatter', 
        data: { 
            datasets: [{ 
                // label: "Result",
                data: resultsData, 
            }], 
        }, 
        options: {
            scales: {
                x: {
                    type: 'linear', 
                    position: 'bottom', 
                    title: { 
                        display: true, 
                        text: 'Left-Right',
                    },
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 5.0,
                        beginAtZero: true,
                        precision: 0
                    }
                }, 
                y: { 
                    type: "linear",
                    position: "left",
                    title: { 
                        display: true, 
                        text: "Libertarian-Authoritarian", 
                    },
                    ticks: {
                        maxTicksLimit: 20
                    },
                    min: 0,
                    max: 100,
                }, 
            },
            responsive: false,
            elements: { 
                point: { 
                    borderColor: "rgba(255, 255, 255, 1.0)",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    radius: 4, 
                    hoverRadius: 10, 
                }, 
            },
            plugins: {
                legend: {
                    display: false
                },
                quadrants: {
                    topLeft: RED,
                    topRight: BLUE,
                    bottomRight: YELLOW,
                    bottomLeft: GREEN,
                }
            }
        },
        plugins: [quadrants]
    };
    // Create and render the chart
    const ctx = document.getElementById("results").getContext("2d");
    new Chart(ctx, config);
    // Show the chart
    container.hidden = false;
    // Display the percentage ranges
    displayPercentages();
}
