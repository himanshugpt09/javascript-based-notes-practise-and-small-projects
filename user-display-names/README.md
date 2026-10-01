You have a list of user objects. You need to build a list of formatted display names from them. This is a common task. It also reveals a real gotcha: passing a built-in method directly to map() can silently break, because map() passes more than one argument to its callback.

Main concept being drilled: Extracting and transforming properties from an array of objects using map(). Also: the map() callback secretly receives three arguments (element, index, array), not just one. This causes bugs if you're not careful.

Other concepts used: map() basics , arrow functions, template literals, object property access.