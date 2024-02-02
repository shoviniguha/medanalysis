"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/map-obj";
exports.ids = ["vendor-chunks/map-obj"];
exports.modules = {

/***/ "(rsc)/./node_modules/map-obj/index.js":
/*!***************************************!*\
  !*** ./node_modules/map-obj/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nconst isObject = (value)=>typeof value === \"object\" && value !== null;\nconst mapObjectSkip = Symbol(\"skip\");\n// Customized for this use-case\nconst isObjectCustom = (value)=>isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);\nconst mapObject = (object, mapper, options, isSeen = new WeakMap())=>{\n    options = {\n        deep: false,\n        target: {},\n        ...options\n    };\n    if (isSeen.has(object)) {\n        return isSeen.get(object);\n    }\n    isSeen.set(object, options.target);\n    const { target } = options;\n    delete options.target;\n    const mapArray = (array)=>array.map((element)=>isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);\n    if (Array.isArray(object)) {\n        return mapArray(object);\n    }\n    for (const [key, value] of Object.entries(object)){\n        const mapResult = mapper(key, value, object);\n        if (mapResult === mapObjectSkip) {\n            continue;\n        }\n        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;\n        // Drop `__proto__` keys.\n        if (newKey === \"__proto__\") {\n            continue;\n        }\n        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {\n            newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);\n        }\n        target[newKey] = newValue;\n    }\n    return target;\n};\nmodule.exports = (object, mapper, options)=>{\n    if (!isObject(object)) {\n        throw new TypeError(`Expected an object, got \\`${object}\\` (${typeof object})`);\n    }\n    return mapObject(object, mapper, options);\n};\nmodule.exports.mapObjectSkip = mapObjectSkip;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWFwLW9iai9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFdBQVdDLENBQUFBLFFBQVMsT0FBT0EsVUFBVSxZQUFZQSxVQUFVO0FBQ2pFLE1BQU1DLGdCQUFnQkMsT0FBTztBQUU3QiwrQkFBK0I7QUFDL0IsTUFBTUMsaUJBQWlCSCxDQUFBQSxRQUN0QkQsU0FBU0MsVUFDVCxDQUFFQSxDQUFBQSxpQkFBaUJJLE1BQUssS0FDeEIsQ0FBRUosQ0FBQUEsaUJBQWlCSyxLQUFJLEtBQ3ZCLENBQUVMLENBQUFBLGlCQUFpQk0sSUFBRztBQUV2QixNQUFNQyxZQUFZLENBQUNDLFFBQVFDLFFBQVFDLFNBQVNDLFNBQVMsSUFBSUMsU0FBUztJQUNqRUYsVUFBVTtRQUNURyxNQUFNO1FBQ05DLFFBQVEsQ0FBQztRQUNULEdBQUdKLE9BQU87SUFDWDtJQUVBLElBQUlDLE9BQU9JLEdBQUcsQ0FBQ1AsU0FBUztRQUN2QixPQUFPRyxPQUFPSyxHQUFHLENBQUNSO0lBQ25CO0lBRUFHLE9BQU9NLEdBQUcsQ0FBQ1QsUUFBUUUsUUFBUUksTUFBTTtJQUVqQyxNQUFNLEVBQUNBLE1BQU0sRUFBQyxHQUFHSjtJQUNqQixPQUFPQSxRQUFRSSxNQUFNO0lBRXJCLE1BQU1JLFdBQVdDLENBQUFBLFFBQVNBLE1BQU1DLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBV2xCLGVBQWVrQixXQUFXZCxVQUFVYyxTQUFTWixRQUFRQyxTQUFTQyxVQUFVVTtJQUN2SCxJQUFJQyxNQUFNQyxPQUFPLENBQUNmLFNBQVM7UUFDMUIsT0FBT1UsU0FBU1Y7SUFDakI7SUFFQSxLQUFLLE1BQU0sQ0FBQ2dCLEtBQUt4QixNQUFNLElBQUl5QixPQUFPQyxPQUFPLENBQUNsQixRQUFTO1FBQ2xELE1BQU1tQixZQUFZbEIsT0FBT2UsS0FBS3hCLE9BQU9RO1FBRXJDLElBQUltQixjQUFjMUIsZUFBZTtZQUNoQztRQUNEO1FBRUEsSUFBSSxDQUFDMkIsUUFBUUMsVUFBVSxFQUFDQyxnQkFBZ0IsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0g7UUFFdEQseUJBQXlCO1FBQ3pCLElBQUlDLFdBQVcsYUFBYTtZQUMzQjtRQUNEO1FBRUEsSUFBSWxCLFFBQVFHLElBQUksSUFBSWlCLGlCQUFpQjNCLGVBQWUwQixXQUFXO1lBQzlEQSxXQUFXUCxNQUFNQyxPQUFPLENBQUNNLFlBQ3hCWCxTQUFTVyxZQUNUdEIsVUFBVXNCLFVBQVVwQixRQUFRQyxTQUFTQztRQUN2QztRQUVBRyxNQUFNLENBQUNjLE9BQU8sR0FBR0M7SUFDbEI7SUFFQSxPQUFPZjtBQUNSO0FBRUFpQixPQUFPQyxPQUFPLEdBQUcsQ0FBQ3hCLFFBQVFDLFFBQVFDO0lBQ2pDLElBQUksQ0FBQ1gsU0FBU1MsU0FBUztRQUN0QixNQUFNLElBQUl5QixVQUFVLENBQUMsMEJBQTBCLEVBQUV6QixPQUFPLElBQUksRUFBRSxPQUFPQSxPQUFPLENBQUMsQ0FBQztJQUMvRTtJQUVBLE9BQU9ELFVBQVVDLFFBQVFDLFFBQVFDO0FBQ2xDO0FBRUFxQiw0QkFBNEIsR0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbWFwLW9iai9pbmRleC5qcz9lNDgxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNPYmplY3QgPSB2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuY29uc3QgbWFwT2JqZWN0U2tpcCA9IFN5bWJvbCgnc2tpcCcpO1xuXG4vLyBDdXN0b21pemVkIGZvciB0aGlzIHVzZS1jYXNlXG5jb25zdCBpc09iamVjdEN1c3RvbSA9IHZhbHVlID0+XG5cdGlzT2JqZWN0KHZhbHVlKSAmJlxuXHQhKHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSAmJlxuXHQhKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpICYmXG5cdCEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKTtcblxuY29uc3QgbWFwT2JqZWN0ID0gKG9iamVjdCwgbWFwcGVyLCBvcHRpb25zLCBpc1NlZW4gPSBuZXcgV2Vha01hcCgpKSA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0ZGVlcDogZmFsc2UsXG5cdFx0dGFyZ2V0OiB7fSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0aWYgKGlzU2Vlbi5oYXMob2JqZWN0KSkge1xuXHRcdHJldHVybiBpc1NlZW4uZ2V0KG9iamVjdCk7XG5cdH1cblxuXHRpc1NlZW4uc2V0KG9iamVjdCwgb3B0aW9ucy50YXJnZXQpO1xuXG5cdGNvbnN0IHt0YXJnZXR9ID0gb3B0aW9ucztcblx0ZGVsZXRlIG9wdGlvbnMudGFyZ2V0O1xuXG5cdGNvbnN0IG1hcEFycmF5ID0gYXJyYXkgPT4gYXJyYXkubWFwKGVsZW1lbnQgPT4gaXNPYmplY3RDdXN0b20oZWxlbWVudCkgPyBtYXBPYmplY3QoZWxlbWVudCwgbWFwcGVyLCBvcHRpb25zLCBpc1NlZW4pIDogZWxlbWVudCk7XG5cdGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcblx0XHRyZXR1cm4gbWFwQXJyYXkob2JqZWN0KTtcblx0fVxuXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcblx0XHRjb25zdCBtYXBSZXN1bHQgPSBtYXBwZXIoa2V5LCB2YWx1ZSwgb2JqZWN0KTtcblxuXHRcdGlmIChtYXBSZXN1bHQgPT09IG1hcE9iamVjdFNraXApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBbbmV3S2V5LCBuZXdWYWx1ZSwge3Nob3VsZFJlY3Vyc2UgPSB0cnVlfSA9IHt9XSA9IG1hcFJlc3VsdDtcblxuXHRcdC8vIERyb3AgYF9fcHJvdG9fX2Aga2V5cy5cblx0XHRpZiAobmV3S2V5ID09PSAnX19wcm90b19fJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMuZGVlcCAmJiBzaG91bGRSZWN1cnNlICYmIGlzT2JqZWN0Q3VzdG9tKG5ld1ZhbHVlKSkge1xuXHRcdFx0bmV3VmFsdWUgPSBBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSA/XG5cdFx0XHRcdG1hcEFycmF5KG5ld1ZhbHVlKSA6XG5cdFx0XHRcdG1hcE9iamVjdChuZXdWYWx1ZSwgbWFwcGVyLCBvcHRpb25zLCBpc1NlZW4pO1xuXHRcdH1cblxuXHRcdHRhcmdldFtuZXdLZXldID0gbmV3VmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSAob2JqZWN0LCBtYXBwZXIsIG9wdGlvbnMpID0+IHtcblx0aWYgKCFpc09iamVjdChvYmplY3QpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYW4gb2JqZWN0LCBnb3QgXFxgJHtvYmplY3R9XFxgICgke3R5cGVvZiBvYmplY3R9KWApO1xuXHR9XG5cblx0cmV0dXJuIG1hcE9iamVjdChvYmplY3QsIG1hcHBlciwgb3B0aW9ucyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5tYXBPYmplY3RTa2lwID0gbWFwT2JqZWN0U2tpcDtcbiJdLCJuYW1lcyI6WyJpc09iamVjdCIsInZhbHVlIiwibWFwT2JqZWN0U2tpcCIsIlN5bWJvbCIsImlzT2JqZWN0Q3VzdG9tIiwiUmVnRXhwIiwiRXJyb3IiLCJEYXRlIiwibWFwT2JqZWN0Iiwib2JqZWN0IiwibWFwcGVyIiwib3B0aW9ucyIsImlzU2VlbiIsIldlYWtNYXAiLCJkZWVwIiwidGFyZ2V0IiwiaGFzIiwiZ2V0Iiwic2V0IiwibWFwQXJyYXkiLCJhcnJheSIsIm1hcCIsImVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJrZXkiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwUmVzdWx0IiwibmV3S2V5IiwibmV3VmFsdWUiLCJzaG91bGRSZWN1cnNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIlR5cGVFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/map-obj/index.js\n");

/***/ })

};
;