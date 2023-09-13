export interface MovieDetailInfoResponse {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: {
		id: number
		name: string
		poster_path: string
		backdrop_path: string
	}
	budget: number
	genres: MovieGenreEntity[]
	homepage: string
	id: number
	imdb_id: string
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: MovieProductionCompanyEntity[]
	production_countries: MovieProductionCountryEntity[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: MovieSpokienLanguagesEntity[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
export interface MovieGenreEntity {
	id: number
	name: string
}
export interface MovieProductionCompanyEntity {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}
export interface MovieProductionCountryEntity {
	iso_3166_1: string
	name: string
}
export interface MovieSpokienLanguagesEntity {
	iso_639_1: string
	english_name: string
	name: string
}

export interface MovieDetailCreditsResponse {
	id: number
	cast: MovieCastEntity[]
	crew: MovieCrewEntity[]
}
export interface MovieCastEntity {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string
	cast_id: number
	character: string
	credit_id: string
	order: number
}
export interface MovieCrewEntity {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string
	credit_id: string
	department: string
	job: string
}
