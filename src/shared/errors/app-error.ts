class AppError {
	public readonly message: string;
	public readonly statusCode: number;

	constructor(statusCode = 400, message: string) {
		this.statusCode = statusCode;
		this.message = message;
	}
}
export default AppError;
