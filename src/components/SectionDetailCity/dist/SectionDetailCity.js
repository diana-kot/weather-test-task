"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var Loader_1 = require("UI/Loader/Loader");
var store_1 = require("redux/store");
var selectors_1 = require("redux/detailCity/selectors");
var asyncActions_1 = require("redux/detailCity/asyncActions");
require("./SectionDetailCity.css");
function SectionDetailCity() {
    var dispatch = store_1.useAppDispatch();
    var id = react_router_dom_1.useParams().id;
    var _a = react_redux_1.useSelector(selectors_1.selectCityData), item = _a.item, status = _a.status;
    var getDetailCities = function () {
        dispatch(asyncActions_1.fetchDetailCity(id));
    };
    react_1.useEffect(function () {
        if (id) {
            getDetailCities();
        }
    }, []);
    return (react_1["default"].createElement("section", { className: "section-city" }, status === 'completed' && react_1["default"].createElement(Loader_1["default"], null)));
}
exports["default"] = SectionDetailCity;
