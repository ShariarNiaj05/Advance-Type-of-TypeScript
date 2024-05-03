"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //  basic promise
    //simulate
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "Data is something";
            //   const data: unknown = null;
            if (data) {
                resolve(data);
            }
            else {
                reject("Failed to load data");
            }
        });
    };
    // calling createPromise function
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
    });
    const createPromise1 = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "something" };
            //   const data: unknown = null;
            if (data) {
                resolve(data);
            }
            else {
                reject("Failed to load data");
            }
        });
    };
    // calling createPromise function
    const showData1 = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise1();
        return data;
    });
    console.log(showData1());
}
