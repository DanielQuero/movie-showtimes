export interface MovieModel {
	id: number
	title: string
	tagline: string
	overview: string
	backdropImgUrl: string
	posterImgUrl: string
	voteAverage: number
	voteCount: number
	releaseDate: Date
	status: string
	imdbId: string
	runtime: number
	genres: GenreModel[]
	directors: MovieCrewModel[]
}

export interface GenreModel {
	id: number
	name: string
}

export interface MovieCrewModel {
	id: number
	name: string
	job: string
}
