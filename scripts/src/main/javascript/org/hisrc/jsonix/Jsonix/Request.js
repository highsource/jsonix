Jsonix.Request = Jsonix
		.Class({
			// REWORK
			factories : [ function() {
				return new XMLHttpRequest();
			}, function() {
				return new ActiveXObject('Msxml2.XMLHTTP');
			}, function() {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}, function() {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}, function() {
				return new ActiveXObject('Microsoft.XMLHTTP');
			}, function() {
				// Node.js
				if (typeof _jsonix_xmlhttprequest !== 'undefined')
				{
					var XMLHttpRequest = _jsonix_xmlhttprequest.XMLHttpRequest;
					return new XMLHttpRequest();
				}
				else
				{
					return null;
				}
			}],
			initialize : function() {
			},
			issue : function(url, onSuccess, onFailure, options) {
				Jsonix.Util.Ensure.ensureString(url);
				if (Jsonix.Util.Type.exists(onSuccess)) {
					Jsonix.Util.Ensure.ensureFunction(onSuccess);
				} else {
					onSuccess = function() {
					};
				}
				if (Jsonix.Util.Type.exists(onFailure)) {
					Jsonix.Util.Ensure.ensureFunction(onFailure);
				} else {
					onFailure = function() {
					};
				}
				if (Jsonix.Util.Type.exists(options)) {
					Jsonix.Util.Ensure.ensureObject(options);
				} else {
					options = {};
				}

				var transport = this.createTransport();

				var method = Jsonix.Util.Type.isString(options.method) ? options.method
						: 'GET';
				var async = Jsonix.Util.Type.isBoolean(options.async) ? options.async
						: true;
				var proxy = Jsonix.Util.Type.isString(options.proxy) ? options.proxy
						: Jsonix.Request.PROXY;

				var user = Jsonix.Util.Type.isString(options.user) ? options.user
						: null;
				var password = Jsonix.Util.Type.isString(options.password) ? options.password
						: null;

				if (Jsonix.Util.Type.isString(proxy) && (url.indexOf("http") === 0)) {
					url = proxy + encodeURIComponent(url);
				}

				if (Jsonix.Util.Type.isString(user)) {
					transport.open(method, url, async, user, password);
				} else {
					transport.open(method, url, async);
				}

				if (Jsonix.Util.Type.isObject(options.headers)) {

					for ( var header in options.headers) {
						if (options.headers.hasOwnProperty(header)) {
							transport.setRequestHeader(header,
									options.headers[header]);
						}
					}
				}

				var data = Jsonix.Util.Type.exists(options.data) ? options.data
						: null;
				if (!async) {
					transport.send(data);
					this.handleTransport(transport, onSuccess, onFailure);
				} else {
					var that = this;
					if (typeof window !== 'undefined') {

						transport.onreadystatechange = function() {
							that.handleTransport(transport, onSuccess,
									onFailure);
						};

						window.setTimeout(function() {
							transport.send(data);
						}, 0);
					} else {

						transport.onreadystatechange = function() {
							that.handleTransport(transport, onSuccess, onFailure);
						};
						transport.send(data);
					}
				}
				return transport;

			},
			handleTransport : function(transport, onSuccess, onFailure) {
				if (transport.readyState == 4) {
					if (!transport.status || (transport.status >= 200 && transport.status < 300)) {
						onSuccess(transport);
					}
					if (transport.status && (transport.status < 200 || transport.status >= 300)) {
						onFailure(transport);
					}
				}
			},
			createTransport : function() {
				for ( var index = 0, length = this.factories.length; index < length; index++) {
					try {
						var transport = this.factories[index]();
						if (transport !== null) {
							return transport;
						}
					} catch (e) {
						// TODO log
					}
				}
				throw new Error('Could not create XML HTTP transport.');
			},
			CLASS_NAME : 'Jsonix.Request'
		});
Jsonix.Request.INSTANCE = new Jsonix.Request();
Jsonix.Request.PROXY = null;