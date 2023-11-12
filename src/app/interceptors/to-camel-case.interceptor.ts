import { HttpEventType, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { map } from "rxjs";
import { Generic } from "../models/generic";

export const isObject = (value: unknown): value is Generic => {
	if(value === null || typeof value === "function") return false;
	return typeof value === "object";
};

const textToCamelCase = (text: string) => {
	return text.toLowerCase().replace(/([-_][a-z])/g, group =>
		group
			.toUpperCase()
			.replace('-', '')
			.replace('_', '')
	);
};

const objectToCamelCase = (object: Generic) => {
	let newObject: Generic = {};

	Object.entries(object).forEach(([key, value]) => {
		let newValue = value;

		if(isObject(newValue)) newValue = objectToCamelCase(newValue);

		newObject[textToCamelCase(key)] = newValue;
	})

	return newObject;
}

export const toCamelCaseInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
	return next(req).pipe(
		map(event => {
			if (event instanceof HttpResponse) {
				event = event.clone({body: objectToCamelCase(event.body as Generic)});
			}
			return event;
		})
	);
}
