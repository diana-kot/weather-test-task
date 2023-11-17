"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var routerPath_1 = require("constants/routerPath");
var useOutsideClick_1 = require("hook/useOutsideClick");
require("./SearchPreview.css");
function InsertMark(filter, str) {
    if (!filter)
        return str;
    var regexp = new RegExp(filter, 'ig');
    var matchValue = str.match(regexp);
    if (matchValue) {
        return str.split(regexp).map(function (s, index, array) {
            if (index < array.length - 1) {
                var c = matchValue.shift();
                return (react_1["default"].createElement(react_1["default"].Fragment, null,
                    s,
                    react_1["default"].createElement("span", { className: "name-color" }, c)));
            }
        });
    }
    return str;
}
;
function SearchPreview(_a) {
    var items = _a.items, setInputValue = _a.setInputValue, setOpen = _a.setOpen, inputValue = _a.inputValue;
    var dropDownRef = useOutsideClick_1.useOutsideClick(function () {
        setOpen(false);
    });
    var itemClickHandler = function (name) {
        setInputValue(name);
        setOpen(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { ref: dropDownRef },
            react_1["default"].createElement("ul", { className: "search-preview__list" }, items &&
                items.length > 0 &&
                items.map(function (item) { return (react_1["default"].createElement("li", { key: item.id, className: "search-preview__item", onClick: function () { return itemClickHandler(item.name); } },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: routerPath_1.routerPath.CITIES + "/" + item.name, className: "search-preview__link" },
                        react_1["default"].createElement("p", { className: "search-preview__item-name" }, item.name)))); })))));
}
exports["default"] = SearchPreview;
