(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{2014:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2015),i(181)],void 0===(n=function(e,t,i,r){var n=new Set,s=[],o=new Map,a=[0,0];return function(){function e(e){var t=this;this._keysToRequests=new Map,this.tileInfoView=null;var r=e.strategy&&"scale-first"!==e.strategy?this._peekByCenterFirst.bind(this):this._peekByScaleFirst.bind(this);this.tileInfoView=e.tileInfoView,e.tileServers&&e.tileServers.length>0?this._queues=e.tileServers.map(function(n){return new i({concurrency:e.concurrency||6,process:function(i){var r=t._keysToRequests.get(i);return e.process(r,n)},peeker:r})}):this._queues=[new i({concurrency:e.concurrency||6,process:function(i){var r=t._keysToRequests.get(i);return e.process(r)},peeker:r})]}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queues.reduce(function(e,t){return e+t.length},0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onGoingCount",{get:function(){return this._keysToRequests.size},enumerable:!0,configurable:!0}),e.prototype.clear=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].clear();this._keysToRequests.clear()},e.prototype.find=function(e,t){for(var i=this,r=0,n=this._queues;r<n.length;r++){var s=n[r].find(function(t){return e(i._keysToRequests.get(t).key)});if(s)return s}},e.prototype.get=function(e){for(var t="string"==typeof e?e:e.id,i=0,r=this._queues;i<r.length;i++){var n=r[i].get(t);if(n)return n}},e.prototype.getRequest=function(e){var t="string"==typeof e?e:e.id;return this._keysToRequests.get(t)},e.prototype.has=function(e){return"string"==typeof e?this._keysToRequests.has(e):this._keysToRequests.has(e.id)},e.prototype.isOngoing=function(e){var t="string"==typeof e?e:e.id;return this.has(t)&&this._queues.some(function(e){return e.isOngoing(t)})},e.prototype.pause=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].pause()},e.prototype.push=function(e){var t=this,i=e.key.id;if(this.has(i))return this.get(i);var r=this._queues[e.key.row%this._queues.length].push(i),n=function(){return t._keysToRequests.delete(i)};return this._keysToRequests.set(i,e),r.then(n,n),r},e.prototype.reset=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].reset()},e.prototype.resume=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].resume()},e.prototype._peekByScaleFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,i=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY,a=0,u=e;a<u.length;a++){var h=u[a],c=this._keysToRequests.get(h),l=this.tileInfoView.getTileScale(c.key);o.has(l)||(o.set(l,[]),i=Math.max(l,i),r=Math.min(l,r)),o.get(l).push(c.key),n.add(l)}var d=this.state.scale;o.has(d)||(function(e,t){e.length=0,t.forEach(function(t){return e.push(t)})}(s,n),s.sort(),d=s.reduce(function(e,t,i,r){return Math.abs(t-d)<Math.abs(e-d)?t:e},s[0])),d=Math.min(d,i),d=Math.max(d,r);var p=o.get(d),f=t.getClosestInfoForScale(d),_=f.getColumnForX(this.state.center[0]),g=f.getRowForY(this.state.center[1]);return p.sort(function(e,t){var i=f.denormalizeCol(e.col,e.world),r=f.denormalizeCol(t.col,t.world);return Math.sqrt((_-i)*(_-i)+(g-e.row)*(g-e.row))-Math.sqrt((_-r)*(_-r)+(g-t.row)*(g-t.row))}),n.clear(),o.clear(),p[0].id},e.prototype._peekByCenterFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,i=this.state.center,n=Number.POSITIVE_INFINITY,s=null,o=0,u=e;o<u.length;o++){var h=u[o],c=this._keysToRequests.get(h);t.getTileCoords(a,c.key);var l=r.distance(a,i);l<n&&(n=l,s=c.key)}return s.id},e}()}.apply(null,r))||(e.exports=n)},2015:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(34),i(2016),i(55)],void 0===(n=function(e,t,i,r,n){return function(){function e(e){this._apiPromises=new Map,this._processingItems=new Map,this._isPaused=!1,this._scheduledNextHandle=null,this.concurrency=1,this.ordered=!1,e.concurrency&&(this.concurrency=e.concurrency),this.ordered=!!e.ordered,this._queue=new r(e.peeker?{peeker:e.peeker}:void 0),this.process=e.process}return Object.defineProperty(e.prototype,"length",{get:function(){return this._processingItems.size+this._queue.length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear();var e=[];this._processingItems.forEach(function(t){return e.push(t.resultPromise)}),this._processingItems.clear(),e.forEach(function(e){return e.cancel()}),e.length=0,this._apiPromises.forEach(function(t){return e.push(t)}),this._apiPromises.clear(),e.forEach(function(e){return e.cancel()}),this._cancelNext()},e.prototype.find=function(e,t){var i=this,r=void 0;return this._apiPromises.forEach(function(n,s){e.call(t,s)&&(r=i._apiPromises.get(s).promise)}),r},e.prototype.get=function(e){var t=this._apiPromises.get(e);return t&&t.promise||void 0},e.prototype.isOngoing=function(e){return this._processingItems.has(e)},e.prototype.has=function(e){return this._apiPromises.has(e)},e.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},e.prototype.push=function(e){var t=this;if(this._apiPromises.has(e))return this._apiPromises.get(e).promise;var r=new i(function(i){var r=t._processingItems.get(e);r?r.resultPromise.cancel(i):(t._remove(e),t._scheduleNext())});return this._add(e,r),this._scheduleNext(),r.promise},e.prototype.reset=function(){var e=[];this._processingItems.forEach(function(t){return e.push(t)}),this._processingItems.clear();for(var t=0,i=e;t<i.length;t++){var r=i[t];r.resultPromise.isFulfilled()?this._processReset(r):(r.isReset=!0,r.resultPromise.cancel())}},e.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())},e.prototype._scheduleNext=function(){var e=this;this._isPaused||this._scheduledNextHandle||(this._scheduledNextHandle=n.schedule(function(){e._scheduledNextHandle=null,e._next()}))},e.prototype._next=function(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())},e.prototype._processResult=function(e,t){this._remove(e.item),this._scheduleNext(),e.dfd.resolve(t)},e.prototype._processError=function(e,t){e.isReset?this._processReset(e):(this._remove(e.item),this._scheduleNext(),e.dfd.reject(t))},e.prototype._processReset=function(e){this._remove(e.item),this._add(e.item,e.dfd),this._scheduleNext()},e.prototype._processOrdered=function(e,t){var i=this,r=!1;if(e.isReset)this._processReset(e);else{e.result=t,this._itemsToProcess||(this._itemsToProcess=[]),this._processingItems.forEach(function(e){r||(e.result?i._itemsToProcess.push(e):r=!0)});for(var n=0,s=this._itemsToProcess;n<s.length;n++){var o=s[n];!1===o.result.ok?this._processError(o,o.result.error):this._processResult(o,o.result.value)}this._itemsToProcess.length=0}},e.prototype._process=function(e){var t=this;if(null!=e){var i=this._apiPromises.get(e),r=this.process(e);if(function(e){return e&&"function"==typeof e.then}(r)){var n={item:e,resultPromise:r,result:null,dfd:i,isReset:!1};this._processingItems.set(e,n),this.ordered?r.then(function(e){return t._processOrdered(n,{ok:!0,value:e})},function(e){return t._processOrdered(n,{ok:!1,error:e})}):r.then(function(e){return t._processResult(n,e)},function(e){return t._processError(n,e)})}else i.resolve(r),this._remove(e)}},e.prototype._add=function(e,t){this._apiPromises.set(e,t),this._queue.push(e)},e.prototype._remove=function(e){this._queue.remove(e),this._apiPromises.delete(e),this._processingItems.delete(e)},e.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},e}()}.apply(null,r))||(e.exports=n)},2016:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){return function(){function e(e){this._items=[],this._itemSet=new Set,this._peeker=function(e){return e[0]},this._length=0,e&&e.peeker&&(this._peeker=e.peeker)}return Object.defineProperty(e.prototype,"length",{get:function(){return this._length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._itemSet.clear(),this._items.length=0,this._length=0},e.prototype.peek=function(){if(0!==this._length)return this._peeker(this._items)},e.prototype.push=function(e){this.contains(e)||this._add(e)},e.prototype.contains=function(e){return this._length>0&&this._itemSet.has(e)},e.prototype.pop=function(){if(0!==this._length){var e=this.peek();return this._remove(e),e}},e.prototype.remove=function(e){this.contains(e)&&this._remove(e)},e.prototype._add=function(e){this._items.push(e),this._itemSet.add(e),this._length++},e.prototype._remove=function(e){this._itemSet.delete(e),this._items.splice(this._items.indexOf(e),1),this._length--},e}()}.apply(null,r))||(e.exports=n)},2023:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(772),i(259)],void 0===(n=function(e,t,i,r,n){function s(e,t){e.delete(t)}var o=new n(0,0,0,0),a=new Map,u=[],h=[];return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,n=this.tileInfoView.getTileCoverage(e.state,this.buffer);if(n){var c=n.spans,l=n.lodInfo,d=l.level,p=e.state.resolution,f=!e.stationary&&p>this._previousResolution;this._previousResolution=p,i.forEach(function(e){return e.visible=!0}),this.tiles.length=0,a.clear();var _=0,g=0;if(c.length>0)for(var y=0,v=c;y<v.length;y++)for(var I=v[y],m=I.row,x=I.colFrom,b=I.colTo,w=x;w<=b;w++){_++;var T=o.set(d,m,l.normalizeCol(w),l.getWorldForColumn(w)).id;if(i.has(T)){if((q=i.get(T)).status!==r.TileStatus.INITIALIZED&&g++,q.attached){a.set(T,q);continue}q.attached||f||this._addParentTile(T,a)}else{var q=this.acquireTile(o);this.tileIndex.set(T,q),f||this._addParentTile(T,a)}}var P=g===_;h.length=0,u.length=0,i.forEach(function(e,i){if(o.set(i),!a.has(i)){var s=t.tileInfoView.intersects(n,o);!s||!f&&P?"purge"===t.cachePolicy&&e.status!==r.TileStatus.MODIFIED&&e.status!==r.TileStatus.READY?u.push(i):(o.level>d||!s)&&u.push(i):e.attached?h.push(i):o.level>d&&u.push(i)}});for(var k=0,S=h;k<S.length;k++){T=S[k];(q=i.get(T))&&q.attached&&a.set(T,q)}for(var M=0,R=u;M<R.length;M++){T=R[M],q=i.get(T);this.releaseTile(q),s(i,T)}a.forEach(function(e){return t.tiles.push(e)}),i.forEach(function(e){a.has(e.key.id)||(e.visible=!1)}),h.length=0,u.length=0,a.clear()}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;i=this.tileInfoView.getTileParentId(i);)if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i))&&r.attached){t.has(r.key.id)||t.set(r.key.id,r);break}},e}()}.apply(null,r))||(e.exports=n)},2093:function(e,t,i){var r,n;r=[i(3)],void 0===(n=function(e){var t=0;return e.createSubclass({constructor:function(){this._deletedGraphicsIndex=new Set,this._intentsIndex=new Map},destroy:function(){this.removeAll(),this._deletedGraphicsIndex=null,this._intentsIndex=null},properties:{graphics:null,indexById:{value:null,dependsOn:["graphics","objectIdField"],get:function(){return this._createIndexById(this.graphics&&this.graphics.toArray(),this.objectIdField)}},numGraphics:{value:0,dependsOn:["indexById"],get:function(){return this.indexById?this.indexById.size:0}},objectIdField:null,updating:{value:!1,dependsOn:["_intentsIndex"],get:function(){return!!(this._intentsIndex&&this._intentsIndex.size>0)}},_intentsIndex:{value:null}},_oldIndex:null,_deletedGraphicsIndex:null,beginPagedUpdate:function(){this._oldIndex=this.indexById,this.indexById=null,this.notifyChange("numGraphics")},addPage:function(e,t){this.add(e,t)},revertPagedUpdate:function(){var e=this._removeLeftOnly(this.indexById,this._oldIndex);this.indexById=this._oldIndex,this._oldIndex=null,this.graphics.removeMany(e),this.notifyChange("numGraphics")},endPagedUpdate:function(){var e=this._removeLeftOnly(this._oldIndex,this.indexById);this._oldIndex=null,this.graphics.removeMany(e),this.notifyChange("numGraphics")},findGraphic:function(e){var t=this.indexById&&this.indexById.get(e);return t&&t.graphic},removeAll:function(){this.indexById=this._oldIndex=null,this.graphics.removeAll(),this.notifyChange("numGraphics")},add:function(e,t){if(e&&e.length){for(var i=this.objectIdField,r=this.indexById=this.indexById||new Map,n=this._oldIndex,s=this._createIndexById(e,i),o=this._extractObjectIds(s),a=this._extractObjectIds(r),u=this._extractObjectIds(n),h=a.concat(u),c=[],l=h.length,d=0;d<l;d++){var p=h[d];o.indexOf(p)>-1&&c.push(p)}c.length&&this._remove(c,!1);var f=this.findIntent(t),_=new Map,g=e.length;for(d=0;d<g;d++){var y=e[d];y&&y.attributes&&_.set(y.attributes[i],f)}e.length&&this._add(e,_)}},remove:function(e){this._remove(e,!1)},delete:function(e){this._remove(e,!0)},isDeleted:function(e){return this._deletedGraphicsIndex.has(e)},createIntentToAdd:function(e){e&&this._intentsIndex.forEach(function(t,i){e.forEach(function(e){t.ignoredIds.add(e)})},this);var i=t++;return this._intentsIndex.set(i,{ignoredIds:new Set}),this.notifyChange("updating"),i},findIntent:function(e){return this._intentsIndex.get(e)},removeIntent:function(e){this._intentsIndex.delete(e),this.notifyChange("updating")},update:function(e,t){if(e&&e.length){for(var i=this.objectIdField,r=this.indexById=this.indexById||new Map,n=this._oldIndex,s=this._createIndexById(e,i),o=this._extractObjectIds(s),a=this._extractObjectIds(r),u=this._extractObjectIds(n),h=a.concat(u),c=[],l=h.length,d=0;d<l;d++){var p=h[d];if(-1===o.indexOf(p))c.push(p);else{var f=r.get(p)||n.get(p),_=f&&f.graphic&&f.graphic._ts,g=s.get(p);(g&&g.graphic&&g.graphic._ts)>_&&c.push(p)}}var y=[],v=o.length;for(d=0;d<v;d++){p=o[d];(-1===h.indexOf(p)||c.indexOf(p)>-1)&&y.push(p)}c.length&&this._remove(c,!1),y.length&&this._add(this._extractGraphics(y,s),t)}},_createIndexById:function(e,t){var i,r,n,s;if(e&&e.length&&t)for(i=new Map,r=0;n=e[r];r++)null!=(s=n.attributes&&n.attributes[t])&&i.set(s,{graphic:n,refCount:1});return i},_add:function(e,t){var i=this.objectIdField;e.forEach(function(e){var r=e.attributes&&e.attributes[i],n=t.get(r);this._addToIndex(e,this.indexById,n)},this),this.graphics.addMany(e),this.notifyChange("numGraphics")},_addToIndex:function(e,t,i){var r=e.attributes&&e.attributes[this.objectIdField];if(t&&null!=r)if(t.has(r)){if(!i||!i.ignoredIds.has(r)){var n=t.get(r);t.set(r,{graphic:e,refCount:n.refCount+1})}}else this.isDeleted(r)||t.set(r,{graphic:e,refCount:1})},_remove:function(e,t){var i;i="object"==typeof(e=e||[])[0]?e.map(function(e){return e.attributes&&e.attributes[this.objectIdField]}.bind(this)):e;var r=this._extractGraphics(i,this._oldIndex),n=this._extractGraphics(i,this.indexById);i.forEach(function(e){t&&this._deletedGraphicsIndex.add(e),this._removeFromIndex(e,this._oldIndex,t),this._removeFromIndex(e,this.indexById,t)}.bind(this)),this.graphics.removeMany(r.concat(n)),this.notifyChange("numGraphics")},_removeFromIndex:function(e,t,i){if(t&&t.has(e))if(i)t.delete(e);else{var r=t.get(e),n=r.refCount-1;0===n?t.delete(e):r.refCount=n}},_removeLeftOnly:function(e,t){var i=[];return e&&e.forEach(function(r,n){var s=r.graphic;!s||t&&t.has(n)||(r.refCount=r.refCount-1,0===r.refCount&&e.delete(n),i.push(s))}),i},_extractGraphics:function(e,t){return e&&t?e.map(function(e){var i=t.get(e);return i&&i.graphic}):[]},_extractObjectIds:function(e){var t=[];return e&&e.forEach(function(e,i){t.push(i)}),t}})}.apply(null,r))||(e.exports=n)},2294:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(3),i(10),i(53),i(17),i(11),i(180),i(9),i(1),i(35),i(2295),i(2093),i(124),i(772),i(773),i(259),i(2014),i(2023)],void 0===(n=function(e,t,i,r,n,s,o,a,u,h,c,l,d,p,f,_,g,y,v,I,m){var x=u.getLogger("esri.views.2d.layers.MapImageLayerView2D"),b=function(){function e(){this.key=new v(0,0,0,0),this.status=g.TileStatus.INITIALIZED}return e.prototype.dispose=function(){},e}();return function(e){function t(t){var i=e.call(this)||this;return i._handles=new a,i._pendingQueries=new Map,i._tileRequests=new Map,i.layer=t.layer,i.layerView=t.layerView,i.graphics=t.graphics,i._tileInfo=_.create({spatialReference:i.layerView.view.spatialReference,size:512}),i._tileInfoView=new y(i._tileInfo),i._tileQueue=new I({tileInfoView:i._tileInfoView,process:function(e){return i._fetchTile(e)}}),i._tileSet=new p({layer:i.layer,tileInfo:i._tileInfo}),i._graphicsManager=new f({graphics:i.graphics,objectIdField:i.layer.objectIdField}),i._tileStrategy=new m({cachePolicy:"purge",acquireTile:function(e){return i._acquireTile(e)},releaseTile:function(e){return i._releaseTile(e)},tileInfoView:i._tileInfoView}),i._handles.add([i.layer.watch("outFields",function(e,t){if(e&&t){if(-1!==t.indexOf("*"))return;e.sort(),t.sort(),JSON.stringify(e)!==JSON.stringify(t)&&i.refresh()}else i.refresh()}),i.layer.watch("definitionExpression, historicMoment",function(){return i.refresh()}),i.layer.on("edits",function(e){return i._editsHandler(e)})],"layer"),i}return i(t,e),t.prototype.destroy=function(){var e=this;this._pendingQueries.forEach(function(e){e.isFulfilled()||e.cancel()}),this._tileStrategy.tiles.forEach(function(t){return e._releaseTile(t)}),this._handles.destroy(),this._graphicsManager.destroy(),this._tileStrategy.destroy(),this._tileQueue.clear(),this._tileRequests.clear()},Object.defineProperty(t.prototype,"graphics",{set:function(e){var t=this,i=this._get("graphics");i!==e&&(this._handles.remove("graphics"),i&&i.forEach(function(e){e.layer=null,e.sourceLayer=null}),e&&(e.forEach(function(e){e.layer=t.layer,e.sourceLayer=t.layer}),this._handles.add([e.on("after-add",function(e){e.item.layer=t.layer,e.item.sourceLayer=t.layer}),e.on("after-remove",function(e){e.item.layer=null,e.item.sourceLayer=null})],"graphics")),this._set("graphics",e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._tileQueue.length>0||this.get("_graphicsManager.updating")},enumerable:!0,configurable:!0}),t.prototype.update=function(e){var t=this;this._tileQueue.pause(),this._tileQueue.state=e.state,this._tileStrategy.update(e);var i=this.layer.objectIdField,r=new Map,n=this._tileStrategy.tiles.reduce(function(e,n){if(n.featureSet){var s=t._graphicsManager.findIntent(n.intentId);n.featureSet.features.forEach(function(t){t&&t.attributes&&(r.set(t.attributes[i],s),e.push(t))})}return e},[]);this._graphicsManager.update(n,r),this._tileQueue.resume(),this.notifyChange("updating")},t.prototype.refresh=function(){var e=this;this._tileQueue.reset(),this._graphicsManager.removeAll(),this._tileStrategy.tiles.forEach(function(t){var i=e._graphicsManager.createIntentToAdd();e.notifyChange("updating");var r=e._tileSet.fetch(t.key).then(function(r){return t.intentId=i,t.featureSet=r,e._graphicsManager.add(t.featureSet.features,t.intentId),t});return r.always(function(){e._graphicsManager.removeIntent(i),e.notifyChange("updating")}),r}),this.notifyChange("updating")},t.prototype._acquireTile=function(e){var t=this,i=new b;i.key.set(e);var r=this._tileQueue.push(i.key).then(function(e){i.status=g.TileStatus.READY,i.attached=!0,i.featureSet=e.featureSet,i.intentId=e.intentId,t._graphicsManager.removeIntent(i.intentId),t.layerView.requestUpdate()});return this._tileRequests.set(i,r),this.notifyChange("updating"),i},t.prototype._releaseTile=function(e){if(this._tileRequests.has(e)){var t=this._tileRequests.get(e);t.isFulfilled()||t.cancel(),this._tileRequests.delete(e),this.layerView.requestUpdate()}},t.prototype._fetchTile=function(e){var t=this,i=this._graphicsManager.createIntentToAdd(),r=this._tileSet.fetch(e).then(function(e){for(var t=Date.now(),r=0,n=e.features;r<n.length;r++)n[r]._ts=t;return{featureSet:e,intentId:i}});return r.catch(function(e){if(t._graphicsManager.removeIntent(i),e&&"cancel"===e.dojoType)return c.reject(e);var r=new s("ondemandcontroller2d:tile-request-failed","Failed to query for features",{error:e});return x.error(r),c.reject(r)}),r},t.prototype._editsHandler=function(e){var t=this,i=function(e){return e.objectId},r=e.deletedFeatures.map(i);this._graphicsManager.delete(r);var n=e.addedFeatures.concat(e.updatedFeatures).map(i);if(n.length){var s=this.layer.createQuery();s.objectIds=n,s.outSpatialReference=this._tileInfo.spatialReference;var o=this._graphicsManager.createIntentToAdd(n),a=this.layer.queryFeatures(s);this._pendingQueries.set(o,a),this.notifyChange("updating"),a.then(function(e){return t._refetchHandler(e,o)}).always(function(){t._graphicsManager.removeIntent(o),t._pendingQueries.delete(o),t.notifyChange("updating")})}},t.prototype._refetchHandler=function(e,t){var i=this,r=e.features;if(r){for(var n=this._tileInfo.spatialReference,s=0,o=this._tileStrategy.tiles;s<o.length;s++){!function(e){var t=e.key.extent,s=d.toExtent(t,n);r.forEach(function(t){t.geometry&&s.intersects(t.geometry)&&i._addFeatureToTile(t,e)})}(o[s])}this._graphicsManager.add(r,t)}},t.prototype._addFeatureToTile=function(e,t){var i,r=t.featureSet.features||[],n=this.layer.objectIdField,s=e.attributes&&e.attributes[n];r.some(function(e){return(e.attributes&&e.attributes[n])===s&&(i=e),!!i}),i?(i.geometry=e.geometry,i.attributes=e.attributes):r.push(e),t.featureSet.features=r},r([l.property()],t.prototype,"graphics",null),r([l.property()],t.prototype,"layer",void 0),r([l.property()],t.prototype,"layerView",void 0),r([l.property()],t.prototype,"updating",null),r([l.subclass("esri.layers.graphics.controllers.OnDemandController2D")],t)}(l.declared(n,h,o))}.apply(null,r))||(e.exports=n)},2295:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(35),i(778)],void 0===(n=function(e,t,i,r){return function(){function e(e){this.layer=e.layer,this.tileInfo=e.tileInfo}return e.prototype.fetch=function(e){return this._queryTile(e)},e.prototype._queryTile=function(e){return this.layer.queryFeatures(this._createQuery(e))},e.prototype._createQuery=function(e){this.tileInfo.updateTileInfo(e);var t=this.tileInfo.spatialReference,r=this.layer.createQuery();return r.geometry=i.toExtent(e.extent,t),r.outSpatialReference=t,this._setResolutionParams(r,e),r},e.prototype._setResolutionParams=function(e,t){var i=this.layer,n=i.geometryType;if("polyline"===n||"polygon"===n){var s=this.tileInfo.lodAt(t.level).resolution;"polyline"===n&&(e.maxAllowableOffset=s),i.get("capabilities.query.supportsQuantization")&&(e.quantizationParameters=new r.default({mode:"view",originPosition:"upper-left",tolerance:s,extent:i.fullExtent}))}},e}()}.apply(null,r))||(e.exports=n)}}]),function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/tiling/TileQueue":2014,"esri/core/QueueProcessor":2015,"esri/core/Queue":2016,"esri/views/2d/tiling/TileStrategy":2023,"esri/layers/support/GraphicsManager":2093,"esri/layers/graphics/controllers/OnDemandController2D":2294,"esri/layers/graphics/controllers/support/TileSet":2295})}();