export interface IAppState {
	loading:false;
	snackbar: ISnackbar;
}

export interface ISnackbar{
	open:boolean;
	message:string;
	time:number;
}

