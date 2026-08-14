(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_gis_location_gis-school-location_gis-school-location_module_ts"],{

/***/ 17671:
/*!************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/geolocation/ngx/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": function() { return /* binding */ Geolocation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 69165);






var Geolocation =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Geolocation, _super);

  function Geolocation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Geolocation.prototype.getCurrentPosition = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCurrentPosition", {
      "callbackOrder": "reverse"
    }, arguments);
  };
  /**
   * Watch the current device's position.  Clear the watch by unsubscribing from
   * Observable changes.
   *
   * ```typescript
   * const subscription = this.geolocation.watchPosition()
   *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
   *                               .subscribe(position => {
   *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
   * });
   *
   * // To stop notifications
   * subscription.unsubscribe();
   * ```
   *
   * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
   * @returns {Observable<Geoposition | PositionError>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
   */


  Geolocation.prototype.watchPosition = function (options) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(function (observer) {
      var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
      return function () {
        return navigator.geolocation.clearWatch(watchId);
      };
    });
  };

  Geolocation.ɵfac = /* @__PURE__ */function () {
    let ɵGeolocation_BaseFactory;
    return function Geolocation_Factory(t) {
      return (ɵGeolocation_BaseFactory || (ɵGeolocation_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](Geolocation)))(t || Geolocation);
    };
  }();

  Geolocation.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: Geolocation,
    factory: Geolocation.ɵfac
  });
  Geolocation.pluginName = "Geolocation";
  Geolocation.plugin = "cordova-plugin-geolocation";
  Geolocation.pluginRef = "navigator.geolocation";
  Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
  Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
  Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
  Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
  Geolocation = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([], Geolocation);
  return Geolocation;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Geolocation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], null, {
    getCurrentPosition: []
  });
})(); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2VvbG9jYXRpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBaUtELCtCQUEwQjs7OztJQVV6RCx3Q0FBa0IsYUFBQyxPQUE0QjtJQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxtQ0FBYSxHQUFiLFVBQWMsT0FBNEI7UUFDeEMsT0FBTyxJQUFJLFVBQVUsQ0FBOEIsVUFBQyxRQUFhO1lBQy9ELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzVCLE9BQU8sQ0FDUixDQUFDO1lBQ0YsT0FBTyxjQUFNLE9BQUEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQXpDLENBQXlDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzZHQXpDVSxXQUFXO2lIQUFYLFdBQVc7Ozs7Ozs7O0lBQVgsV0FBVyxrQkFBWCxXQUFXO3NCQW5LeEI7RUFtS2lDLDBCQUEwQjtTQUE5QyxXQUFXOzRGQUFYLFdBQVc7a0JBRHZCLFVBQVU7OEJBV1Qsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIC8qKlxuICAgKiBhIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgbGF0aXR1ZGUgaW4gZGVjaW1hbCBkZWdyZWVzLlxuICAgKi9cbiAgbGF0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbidzIGxvbmdpdHVkZSBpbiBkZWNpbWFsIGRlZ3JlZXMuXG4gICAqL1xuICBsb25naXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBhY2N1cmFjeSBvZiB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBwcm9wZXJ0aWVzLFxuICAgKiBleHByZXNzZWQgaW4gbWV0ZXJzLlxuICAgKi9cbiAgYWNjdXJhY3k6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbidzIGFsdGl0dWRlIGluIG1ldHJlcywgcmVsYXRpdmUgdG8gc2VhXG4gICAqIGxldmVsLiBUaGlzIHZhbHVlIGNhbiBiZSBudWxsIGlmIHRoZSBpbXBsZW1lbnRhdGlvbiBjYW5ub3QgcHJvdmlkZSB0aGUgZGF0YS5cbiAgICovXG4gIGFsdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgYWNjdXJhY3kgb2YgdGhlIGFsdGl0dWRlIGV4cHJlc3NlZCBpbiBtZXRlcnMuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwuXG4gICAqL1xuICBhbHRpdHVkZUFjY3VyYWN5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBkZXZpY2UgaXMgdHJhdmVsaW5nLiBUaGlzXG4gICAqIHZhbHVlLCBzcGVjaWZpZWQgaW4gZGVncmVlcywgaW5kaWNhdGVzIGhvdyBmYXIgb2ZmIGZyb20gaGVhZGluZyB0cnVlIG5vcnRoXG4gICAqIHRoZSBkZXZpY2UgaXMuIDAgZGVncmVlcyByZXByZXNlbnRzIHRydWUgbm9ydGgsIGFuZCB0aGUgZGlyZWN0aW9uIGlzXG4gICAqIGRldGVybWluZWQgY2xvY2t3aXNlICh3aGljaCBtZWFucyB0aGF0IGVhc3QgaXMgOTAgZGVncmVlcyBhbmQgd2VzdCBpcyAyNzBcbiAgICogZGVncmVlcykuIElmIHNwZWVkIGlzIDAsIGhlYWRpbmcgaXMgTmFOLiBJZiB0aGUgZGV2aWNlIGlzIHVuYWJsZSB0byBwcm92aWRlXG4gICAqIGhlYWRpbmcgaW5mb3JtYXRpb24sIHRoaXMgdmFsdWUgaXMgbnVsbC5cbiAgICovXG4gIGhlYWRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSB2ZWxvY2l0eSBvZiB0aGUgZGV2aWNlIGluIG1ldGVycyBwZXIgc2Vjb25kLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBudWxsLlxuICAgKi9cbiAgc3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9wb3NpdGlvbiB7XG4gIC8qKlxuICAgKiBBIENvb3JkaW5hdGVzIG9iamVjdCBkZWZpbmluZyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgKi9cbiAgY29vcmRzOiBDb29yZGluYXRlcztcblxuICAvKipcbiAgICogQSB0aW1lc3RhbXAgcmVwcmVzZW50aW5nIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBsb2NhdGlvbiB3YXMgcmV0cmlldmVkLlxuICAgKi9cbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25FcnJvciB7XG4gIC8qKlxuICAgKiBBIGNvZGUgdGhhdCBpbmRpY2F0ZXMgdGhlIGVycm9yIHRoYXQgb2NjdXJyZWRcbiAgICovXG4gIGNvZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBtZXNzYWdlIHRoYXQgY2FuIGRlc2NyaWJlIHRoZSBlcnJvciB0aGF0IG9jY3VycmVkXG4gICAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvbG9jYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIElzIGEgcG9zaXRpdmUgbG9uZyB2YWx1ZSBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIGFnZSBpbiBtaWxsaXNlY29uZHMgb2YgYVxuICAgKiBwb3NzaWJsZSBjYWNoZWQgcG9zaXRpb24gdGhhdCBpcyBhY2NlcHRhYmxlIHRvIHJldHVybi4gSWYgc2V0IHRvIDAsIGl0XG4gICAqIG1lYW5zIHRoYXQgdGhlIGRldmljZSBjYW5ub3QgdXNlIGEgY2FjaGVkIHBvc2l0aW9uIGFuZCBtdXN0IGF0dGVtcHQgdG9cbiAgICogcmV0cmlldmUgdGhlIHJlYWwgY3VycmVudCBwb3NpdGlvbi4gSWYgc2V0IHRvIEluZmluaXR5IHRoZSBkZXZpY2UgbXVzdFxuICAgKiByZXR1cm4gYSBjYWNoZWQgcG9zaXRpb24gcmVnYXJkbGVzcyBvZiBpdHMgYWdlLiBEZWZhdWx0OiAwLlxuICAgKi9cbiAgbWF4aW11bUFnZT86IG51bWJlcjtcblxuICAvKipcbiAgICogSXMgYSBwb3NpdGl2ZSBsb25nIHZhbHVlIHJlcHJlc2VudGluZyB0aGUgbWF4aW11bSBsZW5ndGggb2YgdGltZVxuICAgKiAoaW4gbWlsbGlzZWNvbmRzKSB0aGUgZGV2aWNlIGlzIGFsbG93ZWQgdG8gdGFrZSBpbiBvcmRlciB0byByZXR1cm4gYVxuICAgKiBwb3NpdGlvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgSW5maW5pdHksIG1lYW5pbmcgdGhhdCBnZXRDdXJyZW50UG9zaXRpb24oKVxuICAgKiB3b24ndCByZXR1cm4gdW50aWwgdGhlIHBvc2l0aW9uIGlzIGF2YWlsYWJsZS5cbiAgICovXG4gIHRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgYXBwbGljYXRpb24gd291bGQgbGlrZSB0byByZWNlaXZlIHRoZSBiZXN0IHBvc3NpYmxlIHJlc3VsdHMuXG4gICAqIElmIHRydWUgYW5kIGlmIHRoZSBkZXZpY2UgaXMgYWJsZSB0byBwcm92aWRlIGEgbW9yZSBhY2N1cmF0ZSBwb3NpdGlvbiwgaXRcbiAgICogd2lsbCBkbyBzby4gTm90ZSB0aGF0IHRoaXMgY2FuIHJlc3VsdCBpbiBzbG93ZXIgcmVzcG9uc2UgdGltZXMgb3IgaW5jcmVhc2VkXG4gICAqIHBvd2VyIGNvbnN1bXB0aW9uICh3aXRoIGEgR1BTIGNoaXAgb24gYSBtb2JpbGUgZGV2aWNlIGZvciBleGFtcGxlKS4gT24gdGhlXG4gICAqIG90aGVyIGhhbmQsIGlmIGZhbHNlLCB0aGUgZGV2aWNlIGNhbiB0YWtlIHRoZSBsaWJlcnR5IHRvIHNhdmUgcmVzb3VyY2VzIGJ5XG4gICAqIHJlc3BvbmRpbmcgbW9yZSBxdWlja2x5IGFuZC9vciB1c2luZyBsZXNzIHBvd2VyLiBEZWZhdWx0OiBmYWxzZS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBlbmFibGVIaWdoQWNjdXJhY3k/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEdlb2xvY2F0aW9uXG4gKiBAcHJlbWllciBnZW9sb2NhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGV2aWNlJ3MgbG9jYXRpb24sIHN1Y2ggYXMgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZS4gQ29tbW9uIHNvdXJjZXMgb2YgbG9jYXRpb24gaW5mb3JtYXRpb24gaW5jbHVkZSBHbG9iYWwgUG9zaXRpb25pbmcgU3lzdGVtIChHUFMpIGFuZCBsb2NhdGlvbiBpbmZlcnJlZCBmcm9tIG5ldHdvcmsgc2lnbmFscyBzdWNoIGFzIElQIGFkZHJlc3MsIFJGSUQsIFdpRmkgYW5kIEJsdWV0b290aCBNQUMgYWRkcmVzc2VzLCBhbmQgR1NNL0NETUEgY2VsbCBJRHMuXG4gKlxuICogIFRoaXMgQVBJIGlzIGJhc2VkIG9uIHRoZSBXM0MgR2VvbG9jYXRpb24gQVBJIFNwZWNpZmljYXRpb24sIGFuZCBvbmx5IGV4ZWN1dGVzIG9uIGRldmljZXMgdGhhdCBkb24ndCBhbHJlYWR5IHByb3ZpZGUgYW4gaW1wbGVtZW50YXRpb24uXG4gKlxuICogRm9yIGlPUyB5b3UgaGF2ZSB0byBhZGQgdGhpcyBjb25maWd1cmF0aW9uIHRvIHlvdXIgY29uZmlndXJhdGlvbi54bWwgZmlsZVxuICogYGBgeG1sXG4gKiA8ZWRpdC1jb25maWcgZmlsZT1cIiotSW5mby5wbGlzdFwiIG1vZGU9XCJtZXJnZVwiIHRhcmdldD1cIk5TTG9jYXRpb25XaGVuSW5Vc2VVc2FnZURlc2NyaXB0aW9uXCI+XG4gKiAgICA8c3RyaW5nPldlIHVzZSB5b3VyIGxvY2F0aW9uIGZvciBmdWxsIGZ1bmN0aW9uYWxpdHkgb2YgY2VydGFpbiBhcHAgZmVhdHVyZXMuPC9zdHJpbmc+XG4gKiA8L2VkaXQtY29uZmlnPlxuICogYGBgXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9nZW9sb2NhdGlvbi9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2VvbG9jYXRpb246IEdlb2xvY2F0aW9uKSB7fVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCkudGhlbigocmVzcCkgPT4ge1xuICogIC8vIHJlc3AuY29vcmRzLmxhdGl0dWRlXG4gKiAgLy8gcmVzcC5jb29yZHMubG9uZ2l0dWRlXG4gKiB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAqICAgY29uc29sZS5sb2coJ0Vycm9yIGdldHRpbmcgbG9jYXRpb24nLCBlcnJvcik7XG4gKiB9KTtcbiAqXG4gKiBsZXQgd2F0Y2ggPSB0aGlzLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oKTtcbiAqIHdhdGNoLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICogIC8vIGRhdGEgY2FuIGJlIGEgc2V0IG9mIGNvb3JkaW5hdGVzLCBvciBhbiBlcnJvciAoaWYgYW4gZXJyb3Igb2NjdXJyZWQpLlxuICogIC8vIGRhdGEuY29vcmRzLmxhdGl0dWRlXG4gKiAgLy8gZGF0YS5jb29yZHMubG9uZ2l0dWRlXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENvb3JkaW5hdGVzXG4gKiBHZW9wb3NpdGlvblxuICogUG9zaXRpb25FcnJvclxuICogR2VvbG9jYXRpb25PcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR2VvbG9jYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5nZW9sb2NhdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWdlb2xvY2F0aW9uJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdlb2xvY2F0aW9uIC0tdmFyaWFibGUgR0VPTE9DQVRJT05fVVNBR0VfREVTQ1JJUFRJT049XCJUbyBsb2NhdGUgeW91XCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0dFT0xPQ0FUSU9OX1VTQUdFX0RFU0NSSVBUSU9OJ10sXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgW3Bvc2l0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb24pIG9mIHRoZSBkZXZpY2UsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldEN1cnJlbnRQb3NpdGlvbihvcHRpb25zPzogR2VvbG9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxHZW9wb3NpdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB0aGUgY3VycmVudCBkZXZpY2UncyBwb3NpdGlvbi4gIENsZWFyIHRoZSB3YXRjaCBieSB1bnN1YnNjcmliaW5nIGZyb21cbiAgICogT2JzZXJ2YWJsZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbigpXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHApID0+IHAuY29vcmRzICE9PSB1bmRlZmluZWQpIC8vRmlsdGVyIE91dCBFcnJvcnNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShwb3NpdGlvbiA9PiB7XG4gICAqICAgY29uc29sZS5sb2cocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSArICcgJyArIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSk7XG4gICAqIH0pO1xuICAgKlxuICAgKiAvLyBUbyBzdG9wIG5vdGlmaWNhdGlvbnNcbiAgICogc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9uT3B0aW9uc30gb3B0aW9ucyAgVGhlIFtnZW9sb2NhdGlvbiBvcHRpb25zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb25PcHRpb25zKS5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8R2VvcG9zaXRpb24gfCBQb3NpdGlvbkVycm9yPn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgd2l0aCB0aGUgW3Bvc2l0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb24pIG9mIHRoZSBkZXZpY2UsIG9yIGVycm9ycy5cbiAgICovXG4gIHdhdGNoUG9zaXRpb24ob3B0aW9ucz86IEdlb2xvY2F0aW9uT3B0aW9ucyk6IE9ic2VydmFibGU8R2VvcG9zaXRpb24gfCBQb3NpdGlvbkVycm9yPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uIHwgUG9zaXRpb25FcnJvcj4oKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHdhdGNoSWQgPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcbiAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiAoKSA9PiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKTtcbiAgICB9KTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 77970:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/gis_location/gis-school-location/gis-school-location-routing.module.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GisSchoolLocationPageRoutingModule": function() { return /* binding */ GisSchoolLocationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gis_school_location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gis-school-location.page */ 55976);




const routes = [
    {
        path: '',
        component: _gis_school_location_page__WEBPACK_IMPORTED_MODULE_0__.GisSchoolLocationPage
    }
];
let GisSchoolLocationPageRoutingModule = class GisSchoolLocationPageRoutingModule {
};
GisSchoolLocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GisSchoolLocationPageRoutingModule);



/***/ }),

/***/ 57595:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/gis_location/gis-school-location/gis-school-location.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GisSchoolLocationPageModule": function() { return /* binding */ GisSchoolLocationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _gis_school_location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gis-school-location-routing.module */ 77970);
/* harmony import */ var _gis_school_location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gis-school-location.page */ 55976);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 17671);








let GisSchoolLocationPageModule = class GisSchoolLocationPageModule {
};
GisSchoolLocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _gis_school_location_routing_module__WEBPACK_IMPORTED_MODULE_0__.GisSchoolLocationPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_gis_school_location_page__WEBPACK_IMPORTED_MODULE_1__.GisSchoolLocationPage],
        providers: [
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        ]
    })
], GisSchoolLocationPageModule);



/***/ }),

/***/ 55976:
/*!************************************************************************************!*\
  !*** ./src/app/pages/gis_location/gis-school-location/gis-school-location.page.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GisSchoolLocationPage": function() { return /* binding */ GisSchoolLocationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_gis_school_location_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gis-school-location.page.html */ 58309);
/* harmony import */ var _gis_school_location_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gis-school-location.page.scss */ 88995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/json.service */ 77232);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/loader-service/loader-service.service */ 90110);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 17671);









// import { Geolocation } from '@ionic-native/geolocation/ngx';












let GisSchoolLocationPage = class GisSchoolLocationPage {
    constructor(router, jsonService, fb, sqlLite, ionStorage, geoLocation, alert, androidPermissions, userService, usersessionService, networkService, sqliteDB, ionicStorage, loaderService, emisService, alertController, camera, file) {
        this.router = router;
        this.jsonService = jsonService;
        this.fb = fb;
        this.sqlLite = sqlLite;
        this.ionStorage = ionStorage;
        this.geoLocation = geoLocation;
        this.alert = alert;
        this.androidPermissions = androidPermissions;
        this.userService = userService;
        this.usersessionService = usersessionService;
        this.networkService = networkService;
        this.sqliteDB = sqliteDB;
        this.ionicStorage = ionicStorage;
        this.loaderService = loaderService;
        this.emisService = emisService;
        this.alertController = alertController;
        this.camera = camera;
        this.file = file;
    }
    ngOnInit() {
        this.initialValidator();
        // this.getGeolocation();
    }
    initialValidator() {
        this.form = this.fb.group({
            Latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", null),
            Longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", null),
            Photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            PhotoName: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            District: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", null),
            Block: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", null),
            udiseCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", null),
            schoolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", null),
        });
    }
    ionViewWillEnter() {
        this.sessionEmisUsertype1 = this.usersessionService.emis_usertype();
        this.sessionEmisUserName = this.usersessionService.emis_username();
        this.SchlLatLongUpdateGet();
        // if(this.sessionEmisUsertype1 == 19 || this.sessionEmisUsertype1 == 10){
        //   // DC, DEO
        //   this.form.controls['District'].setValidators(Validators.required);
        //   this.form.controls['Block'].setValidators(Validators.required);
        //   this.form.controls['District'].updateValueAndValidity();
        //   this.form.controls['Block'].updateValueAndValidity();
        //   this.dcLogin = true;
        //   this.deoLogin = true;
        // }
        if (this.sessionEmisUsertype1 == 8) {
            this.privateSchool = true;
            this.form.controls['udiseCode'].setValue(this.usersessionService.udise_code());
            this.userService.getSchoolInfo(this.usersessionService.udise_code()).subscribe((res) => {
                if (res.dataStatus) {
                    this.schoolInfo = res.result[0];
                    this.schoolId = this.schoolInfo.SclId;
                    this.form.controls['schoolName'].setValue(this.schoolInfo.SclNam);
                }
            });
            // this.form.controls['udiseCode'].setValidators(Validators.required);
            // this.form.controls['schoolName'].setValidators(Validators.required);
            // this.form.controls['udiseCode'].updateValueAndValidity();
            // this.form.controls['schoolName'].updateValueAndValidity();
            // this.getSchoolList();
        }
    }
    SchlLatLongUpdateGet() {
        this.userService.SchlLatLongUpdateGet(this.usersessionService.emis_username()).subscribe((res) => {
            if (res.dataStatus) {
                this.form.controls['Latitude'].setValue(res.result[0].Latitute);
                this.form.controls['Longitude'].setValue(res.result[0].Longitute);
                this.form.controls['Photo'].setValue('https://deka0egrc3bqo.cloudfront.net/' + res.result[0].Photo);
                this.isCompleted = true;
            }
        });
    }
    getSchoolList() {
        this.ionicStorage.getData('schoolList').then(res => {
            if (res != null && res != undefined && res) {
                this.schoolList = res;
            }
            else {
                this.loaderService.presentLoading();
                this.jsonService.SchoolList().subscribe(res => {
                    if (res[0].udise_skl_det) {
                        this.schoolList = [];
                        this.schoolList = res[0].udise_skl_det;
                        this.loaderService.dismissLoader();
                        this.ionicStorage.insertData_Replace('schoolList', this.schoolList);
                        // console.log("schoolList",this.schoolList);
                    }
                });
            }
        });
    }
    navigateBack() {
        this.router.navigate(['/tabs/home']);
    }
    androidPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
            if (!result.hasPermission) {
                console.log("no ACCESS_COARSE_LOCATION  permission");
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION);
            }
        }, err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION));
    }
    getGeolocation() {
        this.activecamra = false;
        this.offlinelat = 0;
        this.offlinelone = 0;
        this.androidPermission();
        this.geoLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            // resp.coords.latitude and resp.coords.longitude are the latitude and longitude values
            const latitude = resp.coords.latitude;
            const longitude = resp.coords.longitude;
            this.offlinelat = latitude;
            this.offlinelone = longitude;
            this.form.controls['Latitude'].setValue(latitude);
            this.form.controls['Longitude'].setValue(longitude);
            this.form.controls['Latitude'].updateValueAndValidity();
            this.form.controls['Longitude'].updateValueAndValidity();
            // Now you can use latitude and longitude as needed
            console.log('this.offlinelone: ', this.offlinelat);
            console.log('this.offlinelone: ', this.offlinelone);
            this.openCamera();
            this.activecamra = true;
        }).catch((error) => {
            this.alert.alertToTurnOnPermission('Location', 'Location');
            console.error('Error getting location', error);
            this.offlinelat = 0;
            this.offlinelone = 0;
        });
        if (this.offlinelat != 0 && !this.activecamra) {
            this.openCamera();
        }
        else {
            setTimeout(() => {
                this.alert.error("Please turn on your location");
            }, 1000);
        }
    }
    searchUdise() {
        if (this.form.value.udiseCode && this.form.value.udiseCode.length > 10) {
            let udiseData = this.schoolList.filter(dd => dd.Udise == +this.form.value.udiseCode);
            // if(udiseData.length > 0){
            //   this.schoolId = udiseData[0].SclId
            //   this.form.controls['schoolName'].setValue(udiseData[0].SclNam);
            // }else{
            //   this.form.controls['udiseCode'].setValue(null);
            //   this.form.controls['schoolName'].setValue(null);
            //   this.alert.error("Invalid udise code");
            // }
            // console.log("udiseData",udiseData)
            this.userService.getSchoolInfo(this.form.value.udiseCode).subscribe((res) => {
                if (res.dataStatus) {
                    this.schoolInfo = res.result[0];
                    this.schoolId = this.schoolInfo.SclId;
                    this.form.controls['schoolName'].setValue(this.schoolInfo.SclNam);
                }
                else {
                    this.form.controls['udiseCode'].setValue(null);
                    this.form.controls['schoolName'].setValue(null);
                    this.alert.error("Invalid udise code");
                }
            });
        }
        else {
            this.alert.error("Invalid udise format");
        }
    }
    onSelectFile1(event) {
        debugger;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg"
                || event.target.files[0].type == "image/png") {
                if (event.target.files[0].size <= 5242880) {
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        // //debugger;
                        this.imageActive = true;
                        this.form.controls['PhotoName'].setValue(fileName);
                        this.form.controls['Photo'].setValue(fileReader.result);
                        this.alert.success('File Uploaded Successfully');
                        // const base = this.form.value.Photo.split('base64,')
                        this.getGeolocation();
                        // let imgObj = {
                        //   "Photo": base[1],
                        //   "PhotoName": fileName
                        // }
                        // if(this.networkService.getCurrentNetworkStatus() == 0){
                        //   this.emisService.S3ImageSave(imgObj).subscribe(res =>{
                        //     if(res.dataStatus){
                        //     }
                        //   })
                        // }
                        // this.alertPopup("File Uploaded Successfully")
                    };
                }
                else {
                    this.alert.error('File Can`t uploaded because Image size should not exceed 5MB');
                    this.jpgimage.nativeElement.value = "";
                }
            }
            else {
                this.alert.error('Please upload only JPG / JPEG image format');
                this.jpgimage.nativeElement.value = "";
            }
        }
    }
    openCamera() {
        this.androidPermissionCamera();
        debugger;
        const options = {
            quality: 60,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: this.camera.Direction.BACK
        };
        this.camera.getPicture(options).then((imageData) => {
            // console.log("CameraPicture",imageData)
            var bucketName = "renewalapplicationemis";
            let expiry = 1800;
            let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            var splitedImage = filename.split(".");
            this.file.readAsDataURL(imagename, filename).then((base64string) => {
                if (base64string) {
                    const base = base64string.split('base64,');
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_14__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 3145728) {
                        this.form.controls['Photo'].setValue(base64string);
                        this.form.controls['PhotoName'].setValue(splitedImage[0] + '.png');
                        // this.getGeolocation();
                    }
                    else {
                        this.alert.error('File Can`t uploaded because Image size should not exceed 3 MB');
                    }
                }
            });
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    androidPermissionCamera() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
            if (!result.hasPermission) {
                console.log("no camera permission");
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
            }
        }, err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA));
    }
    deleteImg() {
        this.form.controls['PhotoName'].setValue(null);
        this.form.controls['Photo'].setValue(null);
        this.form.controls['PhotoName'].updateValueAndValidity();
        this.form.controls['Photo'].updateValueAndValidity();
        this.imageActive = false;
    }
    onSave() {
        if (this.form.valid) {
            this.submitted = false;
            if (this.form.value.Latitude && this.form.value.Longitude) {
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    // online mode
                    let data = {
                        "records": {
                            "id": "",
                            "school_id": this.schoolId,
                            "udise_code": this.form.value.udiseCode,
                            "gis_photo": this.form.value.PhotoName,
                            "latitude": this.form.value.Latitude,
                            "longitude": this.form.value.Longitude,
                            "creation_user": this.sessionEmisUserName
                        }
                    };
                    const base = this.form.value.Photo.split('base64,');
                    let imgObj = {
                        "records": {
                            "Photo": base[1],
                            "PhotoName": this.form.value.PhotoName
                        }
                    };
                    this.userService.SchlLatLongUpdate(data).subscribe(res => {
                        if (res.dataStatus) {
                            // this.alert.success(res.message); this.
                            this.title = 'Photo has uploaded successfully';
                            this.alertOpen = true;
                            this.emisService.S3ImageSave(imgObj).subscribe(res => {
                                if (res.dataStatus) {
                                    setTimeout(() => {
                                        this.alertOpen = false;
                                        this.navigateBack();
                                    }, 2000);
                                }
                            });
                        }
                        else {
                            this.alert.error(res.message);
                        }
                    });
                }
                else {
                    // offline mode
                    const datainsert = 'INSERT INTO gisLocation VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(datainsert, [null, this.sessionEmisUserName, this.schoolId, this.form.value.udiseCode,
                        this.form.value.schoolName, this.form.value.District, this.form.value.Block, this.form.value.Latitude,
                        this.form.value.Longitude, this.form.value.Photo, this.form.value.PhotoName, 2,
                        1]).then(insertres => {
                        // this.alert.warning('No internet Your data is stored locally because you seem to be offline');
                        this.title = 'No internet Your data is stored locally because you seem to be offline';
                        this.alertOpen = true;
                        setTimeout(() => {
                            this.alertOpen = false;
                            this.navigateBack();
                        }, 2000);
                    });
                }
            }
            else {
                this.getGeolocation();
            }
        }
        else {
            this.submitted = true;
            this.alert.error("Please enter valid data");
        }
    }
    close() {
        this.alertOpen = false;
    }
    ionViewWillLeave() {
        this.initialValidator();
        this.dcLogin = false;
        this.deoLogin = false;
        this.privateSchool = false;
        this.isCompleted = false;
    }
};
GisSchoolLocationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_9__.JsonService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__.Geolocation },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_13__.UserSessionService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__.NetworkService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService },
    { type: src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_12__.LoaderServiceService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_6__.EmisService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File }
];
GisSchoolLocationPage.propDecorators = {
    jpgimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['jpgimage',] }]
};
GisSchoolLocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-gis-school-location',
        template: _raw_loader_gis_school_location_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gis_school_location_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GisSchoolLocationPage);



/***/ }),

/***/ 88995:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/gis_location/gis-school-location/gis-school-location.page.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerCss {\n  margin: auto 10px;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.nameCss {\n  font-size: 18px;\n  font-weight: bolder;\n  color: #8B67B3;\n}\n\n.numberCss {\n  font-size: 16px;\n  color: #8B67B3;\n}\n\n.iconCss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid;\n  padding: 0px;\n  background: #8B67B3;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.iconCss ion-icon {\n  font-size: 26px;\n  color: white;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n\n.question {\n  margin: 5px 10px;\n}\n\n.ques-head {\n  margin: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #8B67B3;\n}\n\n.quesInput {\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 5px 10px !important;\n  font-size: 18px;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n\n.centerFlex {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n}\n\n.searchIcon {\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  border: 1px 1px 1px 1px solid;\n  border-right: 1px solid;\n  border-bottom: 1px solid;\n  border-top: 1px solid;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.pop-up {\n  z-index: 1000;\n  position: fixed;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n}\n\n.pop-up .blackdrop {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.pop-up .img-card {\n  position: relative;\n  width: 80%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  z-index: 1;\n}\n\n.pop-up .img-card button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #ef666a;\n  color: #ef666a;\n  font-size: 29px;\n  padding: 3px 5px;\n  position: absolute;\n  top: -27px;\n  right: -25px;\n}\n\n.pop-up.open {\n  top: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpcy1zY2hvb2wtbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBRUo7O0FBREk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUFJO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFUjs7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFUjs7QUFEUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR1o7O0FBQUk7RUFDSSxPQUFBO0FBRVIiLCJmaWxlIjoiZ2lzLXNjaG9vbC1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyQ3Nze1xyXG4gICAgbWFyZ2luOiBhdXRvIDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLm5hbWVDc3N7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5udW1iZXJDc3N7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxufVxyXG5cclxuLmljb25Dc3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4QjY3QjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zeW5jU2VydmVye1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucXVlc3Rpb257XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG59XHJcblxyXG4ucXVlcy1oZWFke1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxufVxyXG5cclxuLnF1ZXNJbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4udXBsb2FkSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDRweCAjOThhNmQ5MWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICAuY2xvc2VidG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJGbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2hJY29ue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCAxcHggMXB4IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAucG9wLXVwe1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLmJsYWNrZHJvcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1nLWNhcmR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZWY2NjZhO1xyXG4gICAgICAgICAgICBjb2xvcjogI2VmNjY2YTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTI3cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLm9wZW57XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ 58309:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gis_location/gis-school-location/gis-school-location.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>GIS Location</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"question\" *ngIf=\"privateSchool\" >\r\n      <ion-row class=\"ques-head\"> UDISE </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\" >\r\n          <!-- <div mode=\"md\" fill=\"outline\" class=\"centerFlex\">\r\n            <ion-input type=\"tel\" minlength=\"11\" maxlength=\"11\" formControlName=\"udiseCode\" placeholder=\"Please enter\" class=\"quesInput\" style=\"border-right: none;\r\n            border-radius: 10px 0px 0px 10px !important;\"></ion-input>\r\n            <ion-icon (click)=\"searchUdise()\" name=\"search-outline\" class=\"searchIcon\" ></ion-icon>\r\n          </div> -->\r\n          <div mode=\"md\" fill=\"outline\" class=\"centerFlex\">\r\n            <ion-input disabled=\"true\" type=\"tel\" minlength=\"11\" maxlength=\"11\" formControlName=\"udiseCode\" placeholder=\"Please enter\" class=\"quesInput\" ></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.udiseCode.errors && (submitted || form.controls.udiseCode.dirty || form.controls.udiseCode.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.udiseCode.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"question\" *ngIf=\"privateSchool\" >\r\n      <ion-row class=\"ques-head\"> School Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\" >\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"text\" formControlName=\"schoolName\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.schoolName.errors && (submitted || form.controls.schoolName.dirty || form.controls.schoolName.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.schoolName.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!-- <div class=\"question\" *ngIf=\"dcLogin\" >\r\n      <ion-row class=\"ques-head\"> District </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\" >\r\n          <div mode=\"md\" fill=\"outline\">\r\n           \r\n            <ion-select (ionChange)=\"getBlock($event)\" class=\"quesInput font-12\" placeholder=\"Select district\" formControlName=\"District\">\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.District.errors && (submitted || form.controls.District.dirty || form.controls.District.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.District.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n\r\n    <div class=\"question\" *ngIf=\"dcLogin && deoLogin\">\r\n      <ion-row class=\"ques-head\"> Block </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\" >\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <!-- <ion-input type=\"tel\" minlength=\"8\" maxlength=\"10\" formControlName=\"udiseCode\" placeholder=\"Please enter\" class=\"quesInput\">\r\n            </ion-input> -->\r\n            <ion-select class=\"quesInput font-12\" placeholder=\"Select block\" formControlName=\"Block\" style=\"padding: 15px; height: 59px;\">\r\n              <!-- <ion-select-option *ngFor=\"let option of districtList\" [value]=\"option.district_id\">{{option.district_name}}</ion-select-option> -->\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.Block.errors && (submitted || form.controls.Block.dirty || form.controls.Block.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.Block.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  \r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Photo Upload \r\n        <span class=\"valid-clr\" style=\"color: red;\"> *</span></ion-row>\r\n      <div class=\"font-14\" style=\"padding: 0px 10px;\"><ion-text color=\"danger\">Note: </ion-text>  \r\n        <p>Please capture photos in the HM room and ensure that the school's name is visible</p>\r\n      </div>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <div class=\"quesInput\" *ngIf=\"!form.value.Photo\" style=\"padding: 10px !important; display: flex; align-items: center;\" (click)=\"getGeolocation()\">\r\n              <ion-col size=\"1\" style=\"text-align: center;\">\r\n                <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"8\">\r\n                <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                  Click to Capture Image\r\n                </label>\r\n              </ion-col>\r\n            </div>\r\n            <!-- <ion-input  type=\"file\" (change)=\"onSelectFile1($event)\" formControlName=\"Photo\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input> -->\r\n            <ion-item *ngIf=\"form.value.Photo\" mode=\"md\" fill=\"outline\" style=\"height: 150px;\">\r\n              <ion-button *ngIf=\"!isCompleted\" (click)=\"deleteImg()\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n              </ion-button>\r\n              <img src=\"{{form.value.Photo}}\" class=\"uploadImage\">\r\n            </ion-item>\r\n          </div>\r\n          <!-- <div class=\"font-14\" style=\"padding: 5px; color: #8b67b3;\"> \r\n            <p style=\"margin: 0px;\"><span class=\"valid-clr\" style=\"color: red;\">*</span> Please upload only JPG / JPEG / PNG image format</p>\r\n          </div> -->\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.Photo.errors && (submitted || form.controls.Photo.dirty || form.controls.Photo.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.Photo.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Latitude <span class=\"valid-clr\" style=\"color: red;\"> *</span></ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\" style=\"opacity: 0.5;\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"tel\" formControlName=\"Latitude\" class=\"quesInput\" style=\"font-size: 20px;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.Latitude.errors && (submitted || form.controls.Latitude.dirty || form.controls.Latitude.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.Latitude.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Longitude <span class=\"valid-clr\" style=\"color: red;\"> *</span></ion-row>\r\n      <ion-row class=\"middle-text\" >\r\n        <ion-col size=\"12\" style=\"opacity: 0.5;\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"tel\" formControlName=\"Longitude\" class=\"quesInput\" style=\"font-size: 20px;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.Longitude.errors && (submitted || form.controls.Longitude.dirty || form.controls.Longitude.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.Longitude.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <div class=\"pop-up\" [class.open]=\"alertOpen\">\r\n    <div class=\"blackdrop\" (click)=\"close()\"></div>\r\n    <div class=\"img-card\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-icon name=\"checkmark-circle-outline\" style=\"font-size: 60px; color: #42ba96; margin: 10px 0px;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"font-size: 30px;\">\r\n          Success\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"font-size: 18px; padding: 15px;\">\r\n            {{title}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-row class=\"syncServer\" [style.opacity]=\"isCompleted ? '0.5':'1'\">\r\n    <ion-col size=\"12\" class=\"add\" (click)=\"isCompleted ? '': onSave()\">\r\n        <ion-label style=\"font-size: 18px;\"> Submit </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gis_location_gis-school-location_gis-school-location_module_ts-es2015.js.map