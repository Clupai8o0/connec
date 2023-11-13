import { NextResponse } from "next/server";
import colors from "colors";
import { v4 } from "uuid";

const response = (success: boolean, msg: string, data?: any) => ({
	success,
	msg,
	data,
});

// Both these are there to shorten the task of handling api response and error
// It prints out success and error in color to make it easier to debug
export const handleSuccess = (msg: string, data?: any, status?: any) => {
	// Prints and underline the success message in green
	console.log(colors.underline(colors.green(`✅ ${msg}`)));

	// Check the next.js docs for api response
	// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
	// https://nextjs.org/docs/app/api-reference/functions/next-response
	return NextResponse.json(response(true, msg, data), {
		status: status !== null ? status : 200,
	});
};
export const handleError = (msg: string, err?: any, status?: any) => {
	console.log(colors.underline(colors.red(`✅ ${msg}`)));
	console.error(colors.magenta(err));

	return NextResponse.json(response(false, msg, err.message), {
		status: status !== null ? status : 500,
	});
};

// This is a more descriptive name for the uuid key generate function
export const generateKey = () => v4();
