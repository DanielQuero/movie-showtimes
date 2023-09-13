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
	cast: MovieCastModel[]
	runtime: number
	genres: GenreModel[]
	directors: MovieCrewModel[]
}

export interface MovieCastModel {
	id: number
	name: string
	character: string
	profileImgUrl: string
	popularity: number
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
