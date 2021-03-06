(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/4akfx1pp.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/4akfx1pp.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonTab, IonTabbar, IonTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTabbar", function() { return Tabbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTabs", function() { return Tabs; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */


var Tab = /** @class */ (function () {
    function Tab() {
        this.loaded = false;
        this.active = false;
        this.disabled = false;
        this.selected = false;
        this.show = true;
        this.tabsHideOnSubPages = false;
    }
    Tab.prototype.selectedChanged = function (selected) {
        if (selected) {
            this.ionSelect.emit();
        }
    };
    Tab.prototype.componentWillLoad = function () {
        if (this.name === undefined && typeof this.component === 'string') {
            this.name = this.component;
        }
    };
    Tab.prototype.onPropChanged = function () {
        this.ionTabMutated.emit();
    };
    Tab.prototype.setActive = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareLazyLoaded()];
                    case 1:
                        _a.sent();
                        this.active = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab.prototype.prepareLazyLoaded = function () {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            return Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, this.el, this.component, ['ion-page']);
        }
        return Promise.resolve();
    };
    Tab.prototype.hostData = function () {
        var _a = this, btnId = _a.btnId, active = _a.active, component = _a.component;
        return {
            'aria-labelledby': btnId,
            'aria-hidden': !active ? 'true' : null,
            'role': 'tabpanel',
            'class': {
                'ion-page': component === undefined,
                'tab-hidden': !active
            }
        };
    };
    Tab.prototype.render = function () {
        return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null);
    };
    Object.defineProperty(Tab, "is", {
        get: function () { return "ion-tab"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "properties", {
        get: function () {
            return {
                "active": {
                    "type": Boolean,
                    "attr": "active",
                    "mutable": true
                },
                "badge": {
                    "type": String,
                    "attr": "badge",
                    "watchCallbacks": ["onPropChanged"]
                },
                "badgeColor": {
                    "type": String,
                    "attr": "badge-color",
                    "watchCallbacks": ["onPropChanged"]
                },
                "btnId": {
                    "type": String,
                    "attr": "btn-id"
                },
                "component": {
                    "type": String,
                    "attr": "component"
                },
                "delegate": {
                    "type": "Any",
                    "attr": "delegate"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["onPropChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "href": {
                    "type": String,
                    "attr": "href",
                    "watchCallbacks": ["onPropChanged"]
                },
                "icon": {
                    "type": String,
                    "attr": "icon",
                    "watchCallbacks": ["onPropChanged"]
                },
                "label": {
                    "type": String,
                    "attr": "label",
                    "watchCallbacks": ["onPropChanged"]
                },
                "name": {
                    "type": String,
                    "attr": "name",
                    "mutable": true
                },
                "selected": {
                    "type": Boolean,
                    "attr": "selected",
                    "watchCallbacks": ["selectedChanged"]
                },
                "setActive": {
                    "method": true
                },
                "show": {
                    "type": Boolean,
                    "attr": "show",
                    "watchCallbacks": ["onPropChanged"]
                },
                "tabsHideOnSubPages": {
                    "type": Boolean,
                    "attr": "tabs-hide-on-sub-pages"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "events", {
        get: function () {
            return [{
                    "name": "ionSelect",
                    "method": "ionSelect",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionTabMutated",
                    "method": "ionTabMutated",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab, "style", {
        get: function () { return ".tab-hidden.sc-ion-tab-h{display:none!important}"; },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());
var Tabbar = /** @class */ (function () {
    function Tabbar() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.keyboardVisible = false;
        this.layout = 'icon-top';
        this.placement = 'bottom';
        this.tabs = [];
        this.highlight = false;
        this.translucent = false;
    }
    Tabbar.prototype.onKeyboardWillHide = function () {
        var _this = this;
        setTimeout(function () { return _this.keyboardVisible = false; }, 50);
    };
    Tabbar.prototype.onKeyboardWillShow = function () {
        if (this.placement === 'bottom') {
            this.keyboardVisible = true;
        }
    };
    Tabbar.prototype.componentDidLoad = function () {
        this.updateHighlight();
    };
    Tabbar.prototype.getSelectedButton = function () {
        return this.el.shadowRoot.querySelector('.tab-btn-selected');
    };
    Tabbar.prototype.updateHighlight = function () {
        var _this = this;
        if (!this.highlight) {
            return;
        }
        this.queue.read(function () {
            var btn = _this.getSelectedButton();
            var highlight = _this.el.shadowRoot.querySelector('.tabbar-highlight');
            if (btn && highlight) {
                highlight.style.transform = "translate3d(" + btn.offsetLeft + "px,0,0) scaleX(" + btn.offsetWidth + ")";
            }
        });
    };
    Tabbar.prototype.hostData = function () {
        var _a;
        var _b = this, color = _b.color, translucent = _b.translucent, layout = _b.layout, placement = _b.placement, keyboardVisible = _b.keyboardVisible;
        return {
            role: 'tablist',
            'aria-hidden': keyboardVisible ? 'true' : null,
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(color), (_a = { 'tabbar-translucent': translucent }, _a["layout-" + layout] = true, _a["placement-" + placement] = true, _a['tabbar-hidden'] = keyboardVisible, _a))
        };
    };
    Tabbar.prototype.renderTabButton = function (tab) {
        var _this = this;
        var icon = tab.icon, label = tab.label, disabled = tab.disabled, badge = tab.badge, badgeColor = tab.badgeColor, href = tab.href;
        var selected = tab === this.selectedTab;
        var hasLabel = label !== undefined;
        var hasIcon = icon !== undefined;
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("a", { role: "tab", "ion-activatable": true, "aria-selected": selected ? 'true' : null, href: href || '#', class: {
                'tab-btn': true,
                'tab-btn-selected': selected,
                'tab-btn-has-label': hasLabel,
                'tab-btn-has-icon': hasIcon,
                'tab-btn-has-label-only': hasLabel && !hasIcon,
                'tab-btn-has-icon-only': hasIcon && !hasLabel,
                'tab-btn-has-badge': badge !== undefined,
                'tab-btn-disabled': disabled,
                'tab-btn-hidden': !tab.show
            }, onClick: function (ev) {
                if (!tab.disabled) {
                    _this.ionTabbarClick.emit(tab);
                }
                ev.preventDefault();
            } }, icon && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { class: "tab-btn-icon", icon: icon, lazy: false }), label && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "tab-btn-text" }, label), badge && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-badge", { class: "tab-btn-badge", color: badgeColor }, badge), this.mode === 'md' && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null)));
    };
    Tabbar.prototype.render = function () {
        var _this = this;
        return [
            this.tabs.map(function (tab) { return _this.renderTabButton(tab); }),
            this.highlight && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "animated tabbar-highlight" })
        ];
    };
    Object.defineProperty(Tabbar, "is", {
        get: function () { return "ion-tabbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "properties", {
        get: function () {
            return {
                "canScrollLeft": {
                    "state": true
                },
                "canScrollRight": {
                    "state": true
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "doc": {
                    "context": "document"
                },
                "el": {
                    "elementRef": true
                },
                "highlight": {
                    "type": Boolean,
                    "attr": "highlight"
                },
                "keyboardVisible": {
                    "state": true
                },
                "layout": {
                    "type": String,
                    "attr": "layout"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "placement": {
                    "type": String,
                    "attr": "placement"
                },
                "queue": {
                    "context": "queue"
                },
                "selectedTab": {
                    "type": "Any",
                    "attr": "selected-tab",
                    "watchCallbacks": ["updateHighlight"]
                },
                "tabs": {
                    "type": "Any",
                    "attr": "tabs"
                },
                "translucent": {
                    "type": Boolean,
                    "attr": "translucent"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "events", {
        get: function () {
            return [{
                    "name": "ionTabbarClick",
                    "method": "ionTabbarClick",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "listeners", {
        get: function () {
            return [{
                    "name": "body:keyboardWillHide",
                    "method": "onKeyboardWillHide"
                }, {
                    "name": "body:keyboardWillShow",
                    "method": "onKeyboardWillShow"
                }, {
                    "name": "window:resize",
                    "method": "updateHighlight",
                    "passive": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "style", {
        get: function () { return ".sc-ion-tabbar-md-h{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:auto;background:var(--background);color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}.ion-color.sc-ion-tabbar-md-h{--background:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb), 0.7);--color-selected:var(--ion-color-contrast)}.tabbar-hidden.sc-ion-tabbar-md-h{display:none!important}.placement-top.sc-ion-tabbar-md-h{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.placement-bottom.sc-ion-tabbar-md-h{padding-bottom:var(--ion-safe-area-bottom,0)}.tabbar-highlight.sc-ion-tabbar-md{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;display:block;position:absolute;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0);background:currentColor}.tabbar-highlight.animated.sc-ion-tabbar-md{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top.sc-ion-tabbar-md-h   .tabbar-highlight.sc-ion-tabbar-md{bottom:0}.placement-bottom.sc-ion-tabbar-md-h   .tabbar-highlight.sc-ion-tabbar-md{top:0}.layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--flex-direction:row;--icon-transform-selected:translate3d(-6px, 0, 0)}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--flex-direction:row-reverse;--icon-transform-selected:translate3d(6px, 0, 0)}.layout-icon-bottom.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--flex-direction:column-reverse;--label-margin-top:-2px;--label-transform:transform-origin(center, top);--icon-transform-selected:translate3d(0, 2px, 0)}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-label-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--justify-content:center}.layout-icon-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--icon-display:none}.layout-label-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--label-display:none}.layout-icon-bottom.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-top.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--badge-end:calc(50% - 30px)}.layout-icon-end.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-hide.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md, .layout-icon-start.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--badge-end:calc(50% - 50px)}.tab-btn.sc-ion-tabbar-md{font-family:inherit;font-size:inherit;font-style:inherit;letter-spacing:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:var(--flex-direction,column);flex-direction:var(--flex-direction,column);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:var(--justify-content,flex-start);-ms-flex-pack:var(--justify-content,flex-start);justify-content:var(--justify-content,flex-start);width:100%;height:100%;border:0;outline:0;background:0 0;text-decoration:none;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.tab-btn.sc-ion-tabbar-md:focus-visible{background:var(--background-focused)}\@media (any-hover:hover){.tab-btn.sc-ion-tabbar-md:hover{color:var(--color-selected)}}.tab-btn-selected.sc-ion-tabbar-md{color:var(--color-selected)}.tab-btn-hidden.sc-ion-tabbar-md{display:none!important}.tab-btn-disabled.sc-ion-tabbar-md{pointer-events:none;opacity:.4}.tab-btn-text.sc-ion-tabbar-md{margin-top:var(--label-margin-top);margin-bottom:var(--label-margin-bottom);display:var(--label-display,block);font-size:var(--label-font-size);line-height:var(--label-line-height)}.tab-btn-icon.sc-ion-tabbar-md{margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:var(--icon-display,block);min-width:var(--icon-min-width);height:var(--icon-height,1em);font-size:var(--icon-font-size)}.tab-btn-icon.sc-ion-tabbar-md, .tab-btn-text.sc-ion-tabbar-md{-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-btn-has-label-only.sc-ion-tabbar-md   .tab-btn-text.sc-ion-tabbar-md{white-space:normal}.tab-btn-has-icon-only.sc-ion-tabbar-md, .tab-btn-has-label-only.sc-ion-tabbar-md{--justify-content:center}.tab-btn-badge.sc-ion-tabbar-md{right:4%;top:6%;right:var(--badge-end,calc(50% - 30px));padding:1px 6px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;height:auto;font-size:12px;line-height:16px}.tab-btn-has-label-only.sc-ion-tabbar-md   .tab-btn-badge.sc-ion-tabbar-md{--badge-end:calc(50% - 50px)}.tab-btn-has-icon-only.sc-ion-tabbar-md   .tab-btn-badge.sc-ion-tabbar-md{--badge-end:calc(50% - 30px)}.tab-btn-selected.sc-ion-tabbar-md   .tab-btn-icon.sc-ion-tabbar-md{-webkit-transform:var(--icon-transform-selected);transform:var(--icon-transform-selected)}.tab-btn.sc-ion-tabbar-md{padding:8px 12px 10px;max-width:168px;font-weight:400}.tab-btn-text.sc-ion-tabbar-md{margin:0;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transform:var(--label-transform);transform:var(--label-transform);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out;font-size:12px;text-transform:none}.tab-btn-selected.sc-ion-tabbar-md   .tab-btn-text.sc-ion-tabbar-md{--label-transform:scale3d(1.16667, 1.16667, 1);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out}.tab-btn-icon.sc-ion-tabbar-md{-webkit-transform-origin:center center;transform-origin:center center;width:22px;height:22px;-webkit-transform:var(--icon-transform);transform:var(--icon-transform);-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out;font-size:22px}.sc-ion-tabbar-md-h{--color:var(--ion-tabbar-text-color, var(--ion-text-color-step-400, #666666));--color-selected:var(--ion-tabbar-text-color-active, #488aff);--background:var(--ion-tabbar-background-color, #f8f8f8);--background-focused:var(--ion-tabbar-background-color-focused, #dadada);--icon-transform-selected:translate3d(0, -2px, 0);height:56px;border-top:1px solid rgba(var(--ion-tabbar-border-color-rgb,0,0,0),.07);contain:strict}.layout-icon-top.sc-ion-tabbar-md-h   .tab-btn.sc-ion-tabbar-md{--label-margin-bottom:-2px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Tabbar;
}());
var Tabs = /** @class */ (function () {
    function Tabs() {
        this.ids = -1;
        this.transitioning = false;
        this.tabsId = (++tabIds);
        this.tabs = [];
        this.tabbarHidden = false;
        this.translucent = false;
        this.useRouter = false;
    }
    Tabs.prototype.componentWillLoad = function () {
        if (!this.useRouter) {
            this.useRouter = !!this.doc.querySelector('ion-router') && !this.el.closest('[no-router]');
        }
        this.loadConfig('tabbarPlacement', 'bottom');
        this.loadConfig('tabbarLayout', 'icon-top');
        this.loadConfig('tabbarHighlight', false);
        this.initTabs();
        this.ionNavWillLoad.emit();
    };
    Tabs.prototype.componentDidLoad = function () {
        return this.initSelect();
    };
    Tabs.prototype.componentDidUnload = function () {
        this.tabs.length = 0;
        this.selectedTab = this.leavingTab = undefined;
    };
    Tabs.prototype.onTabMutated = function () {
        this.el.forceUpdate();
    };
    Tabs.prototype.onTabClicked = function (ev) {
        var selectedTab = ev.detail;
        var href = selectedTab.href;
        if (this.useRouter && href !== undefined) {
            var router = this.doc.querySelector('ion-router');
            if (router) {
                router.push(href);
            }
        }
        else {
            this.select(selectedTab);
        }
    };
    Tabs.prototype.select = function (tabOrIndex) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectedTab;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTab(tabOrIndex)];
                    case 1:
                        selectedTab = _a.sent();
                        if (!this.shouldSwitch(selectedTab)) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.setActive(selectedTab)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.notifyRouter()];
                    case 3:
                        _a.sent();
                        this.tabSwitch();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Tabs.prototype.setRouteId = function (id) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectedTab;
            var _this = this;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTab(id)];
                    case 1:
                        selectedTab = _a.sent();
                        if (!this.shouldSwitch(selectedTab)) {
                            return [2 /*return*/, { changed: false, element: this.selectedTab }];
                        }
                        return [4 /*yield*/, this.setActive(selectedTab)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                changed: true,
                                element: this.selectedTab,
                                markVisible: function () { return _this.tabSwitch(); },
                            }];
                }
            });
        });
    };
    Tabs.prototype.getRouteId = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = this.selectedTab && this.selectedTab.name;
                return [2 /*return*/, id !== undefined ? { id: id, element: this.selectedTab } : undefined];
            });
        });
    };
    Tabs.prototype.getTab = function (tabOrIndex) {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (typeof tabOrIndex === 'string') {
                    return [2 /*return*/, this.tabs.find(function (tab) { return tab.name === tabOrIndex; })];
                }
                if (typeof tabOrIndex === 'number') {
                    return [2 /*return*/, this.tabs[tabOrIndex]];
                }
                return [2 /*return*/, tabOrIndex];
            });
        });
    };
    Tabs.prototype.getSelected = function () {
        return Promise.resolve(this.selectedTab);
    };
    Tabs.prototype.initTabs = function () {
        var _this = this;
        var tabs = this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
        tabs.forEach(function (tab) {
            var id = "t-" + _this.tabsId + "-" + ++_this.ids;
            tab.btnId = 'tab-' + id;
            tab.id = 'tabpanel-' + id;
        });
    };
    Tabs.prototype.initSelect = function () {
        return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tabs, selectedTab, _i, tabs_1, tab;
            return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabs = this.tabs;
                        if (this.useRouter) {
                            return [2 /*return*/];
                        }
                        selectedTab = tabs.find(function (t) { return t.selected; }) ||
                            tabs.find(function (t) { return t.show && !t.disabled; });
                        for (_i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
                            tab = tabs_1[_i];
                            if (tab !== selectedTab) {
                                tab.selected = false;
                            }
                        }
                        if (!selectedTab) return [3 /*break*/, 2];
                        return [4 /*yield*/, selectedTab.setActive()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.selectedTab = selectedTab;
                        if (selectedTab) {
                            selectedTab.selected = true;
                            selectedTab.active = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tabs.prototype.loadConfig = function (attrKey, fallback) {
        var val = this[attrKey];
        if (typeof val === 'undefined') {
            this[attrKey] = this.config.get(attrKey, fallback);
        }
    };
    Tabs.prototype.setActive = function (selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            if (selectedTab !== tab) {
                tab.selected = false;
            }
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionNavWillChange.emit();
        return selectedTab.setActive();
    };
    Tabs.prototype.tabSwitch = function () {
        var selectedTab = this.selectedTab;
        var leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        selectedTab.selected = true;
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionChange.emit({ tab: selectedTab });
            this.ionNavDidChange.emit();
        }
    };
    Tabs.prototype.notifyRouter = function () {
        if (this.useRouter) {
            var router = this.doc.querySelector('ion-router');
            if (router) {
                return router.navChanged(1);
            }
        }
        return Promise.resolve(false);
    };
    Tabs.prototype.shouldSwitch = function (selectedTab) {
        var leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    };
    Tabs.prototype.hostData = function () {
        return {
            class: Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.color)
        };
    };
    Tabs.prototype.render = function () {
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "tabs-inner" }, Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)),
            !this.tabbarHidden && (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-tabbar", { tabs: this.tabs.slice(), color: this.color, selectedTab: this.selectedTab, highlight: this.tabbarHighlight, placement: this.tabbarPlacement, layout: this.tabbarLayout, translucent: this.translucent }))
        ];
    };
    Object.defineProperty(Tabs, "is", {
        get: function () { return "ion-tabs"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "properties", {
        get: function () {
            return {
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "config": {
                    "context": "config"
                },
                "doc": {
                    "context": "document"
                },
                "el": {
                    "elementRef": true
                },
                "getRouteId": {
                    "method": true
                },
                "getSelected": {
                    "method": true
                },
                "getTab": {
                    "method": true
                },
                "name": {
                    "type": String,
                    "attr": "name"
                },
                "select": {
                    "method": true
                },
                "selectedTab": {
                    "state": true
                },
                "setRouteId": {
                    "method": true
                },
                "tabbarHidden": {
                    "type": Boolean,
                    "attr": "tabbar-hidden"
                },
                "tabbarHighlight": {
                    "type": Boolean,
                    "attr": "tabbar-highlight",
                    "mutable": true
                },
                "tabbarLayout": {
                    "type": String,
                    "attr": "tabbar-layout",
                    "mutable": true
                },
                "tabbarPlacement": {
                    "type": String,
                    "attr": "tabbar-placement",
                    "mutable": true
                },
                "tabs": {
                    "state": true
                },
                "translucent": {
                    "type": Boolean,
                    "attr": "translucent"
                },
                "useRouter": {
                    "type": Boolean,
                    "attr": "use-router",
                    "mutable": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "events", {
        get: function () {
            return [{
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionNavWillLoad",
                    "method": "ionNavWillLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionNavWillChange",
                    "method": "ionNavWillChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionNavDidChange",
                    "method": "ionNavDidChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "listeners", {
        get: function () {
            return [{
                    "name": "ionTabMutated",
                    "method": "onTabMutated"
                }, {
                    "name": "ionTabbarClick",
                    "method": "onTabClicked"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "style", {
        get: function () { return ".sc-ion-tabs-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner.sc-ion-tabs{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;contain:layout size style}"; },
        enumerable: true,
        configurable: true
    });
    return Tabs;
}());
var tabIds = -1;



/***/ })

}]);
//# sourceMappingURL=17.js.map