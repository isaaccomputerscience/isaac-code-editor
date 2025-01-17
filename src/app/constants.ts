import {CodeMirrorTheme, ILanguage, PredefinedCode} from "./types";
import {pythonCodeMirrorTheme, pythonLanguage} from "./langages/python";
import {javaScriptCodeMirrorTheme, javaScriptLanguage} from "./langages/javascript";

export const UNDEFINED_CHECKER_RESULT = "UNDEFINED_CHECKER_RESULT";

export const ERRORS = {
    TIME_LIMIT_ERROR: "TimeLimitError",
    EXTERNAL_ERROR: "ExternalError",
    TEST_ERROR: "TestError"
}

export const MESSAGE_TYPES = {
    INITIALISE: "initialise",
    FEEDBACK: "feedback",
    RESIZE: "resize",
    CHECKER: "checker",
    SETUP_FAIL: "setupFail",
    PING: "ping",
    LOGS: "logs"
}

export const EXEC_STATE = {
    RUNNING: "RUNNING",
    CHECKING: "CHECKING",
    STOPPED: "STOPPED"
}

export const LANGUAGES = new Map<string, ILanguage>([
    ["python", pythonLanguage],
    ["javascript", javaScriptLanguage]
]);

export const THEMES = new Map<string, CodeMirrorTheme>([
    ["python", pythonCodeMirrorTheme],
    ["javascript", javaScriptCodeMirrorTheme]
]);

export const IN_IFRAME = (() => {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
})();

// Demo code to show if editor is accessed directly (i.e. not from within an iframe)
export const DEMO_CODE_PYTHON: PredefinedCode = {
    language: "python",
    setup: "",
    code:
        "def bubble_sort(list_of_numbers):\n" +
        "  for end in range(len(list_of_numbers) - 1, 1, -1):\n" +
        "    for j in range(0, end):\n" +
        "      if (list_of_numbers[j] > list_of_numbers[j + 1]):\n" +
        "          temp = list_of_numbers[j]\n" +
        "          list_of_numbers[j] = list_of_numbers[j + 1]\n" +
        "          list_of_numbers[j + 1] = temp\n" +
        "  return list_of_numbers\n" +
        "\n" +
        "sorted_list = bubble_sort([5, 1, 8, 5, 9, 10, 2, 1])\n" +
        "print(\"Sorted list: \" + str(sorted_list))",
    wrapCodeInMain: false,
    test: "startTest()\nif not (bubble_sort([5, 1, 8, 5, 9, 10, 2, 1]) == [1, 1, 2, 5, 5, 8, 9, 10]):\n\traise TestError(\"The 'bubble_sort' function is broken!\")\nendTest()",
}
export const DEMO_CODE_JS: PredefinedCode = {
    language: "javascript",
    setup: "",
    code: "function bubbleSort(listOfNumbers) {\n" +
          "  for (let end = listOfNumbers.length - 1; end >= 1; end--) {\n" +
          "    for (let j = 0; j < end; j++) {\n" +
          "      if (listOfNumbers[j] > listOfNumbers[j + 1]) {\n" +
          "        let temp = listOfNumbers[j];\n" +
          "        listOfNumbers[j] = listOfNumbers[j + 1];\n" +
          "        listOfNumbers[j + 1] = temp;\n" +
          "      }\n" +
          "    }\n" +
          "  }\n" +
          "  return listOfNumbers;\n" +
          "}" +
          "\n" +
          "const sortedList = bubbleSort([5, 1, 8, 5, 9, 10, 2, 1])\n" +
          "alert(\"Sorted list: \" + sortedList.toString())",
    wrapCodeInMain: false,
    test: "startTest()\nif (!arraysEqual(bubbleSort([5, 1, 8, 5, 9, 10, 2, 1]), [1, 1, 2, 5, 5, 8, 9, 10])) {\n\tthrow new TestError(\"The 'bubbleSort' function is broken!\")\n}\nendTest()",
}

export const DEMO_JS_TESTS_CODE: PredefinedCode = {
    language: "javascript",
    setup: "",
    code: "let age = parseInt(prompt(\"Please enter an accepted age \"))\n" +
        "while (age < 18) {\n" +
        "    age = parseInt(prompt(\"Please enter an accepted age \"))\n" +
        "}\n" +
        "alert(\"Done!\")",
    wrapCodeInMain: true,
    test: "startTest([\"4\", \"5\", \"2\", \"17\", \"18\"]);\n" +
        "main();\n" +
        "endTest(\"Your program stopped looping at the correct input\", \"Your program did not end after '18' being input. Try again!\", true)",
}

export const DEMO_PYTHON_REGEX_CODE: PredefinedCode = {
    language: "python",
    setup: "startTest(None, \"^1\\s2\\s3\\s4\\s5\\s?$\")",
    code: "for count in range(1,5):\n" +
          "  print(count)",
    wrapCodeInMain: false,
    test: "endTest()",
}