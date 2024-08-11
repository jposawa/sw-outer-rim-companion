import { Location } from ".";

export enum RatingStatus {
	ONGOING = "ongoing",
	PLANNED = "planned",
	CLOSED = "closed",
}

export enum RatingResult {
	NEUTRAL = "neutral",
	POSITIVE = "positive",
	NEGATIVE = "negative",
	UNKNOWN = "unknown",
}

/**
 * Rating type
 * @param {string} location - Nome da localidade da pesquisa
 * @param {RatingType} result - Resultado geral da pesquisa
 * @param {number} avgPopulation - Média da população na época da pesquisa
 * @param {number} totalInterview - Total de pessoas consultadas
 * @param {Date[]} dates - Lista de datas de inserção da coleta
 * @param {RatingStatus} status - A situação da pesquisa
 * @param {number} [minTarget] - Quantidade de pessoas alvo como mínimo da coleta
 * @param {string} [details] - Detalhes ou observações sobre coleta
 */
export type Rating = {
	location: Location;
	result: RatingResult;
	avgPopulation: number;
	totalInterview: number;
	dates: Date[];
	status: RatingStatus;
	minTarget?: number;
	details?: string;
};
