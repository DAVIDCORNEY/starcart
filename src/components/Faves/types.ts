import {SyntheticEvent} from 'react'
import {ButtonProps, RatingProps} from 'semantic-ui-react'

export interface FaveItemObj {
    id:string;
    rating: number;
    name: string;
    [key: string]: string | string[] | number;
}

export interface RateFaveObj {
    rating: number | string; 
    faveId: string;
}

export type handleRemove = (_e: SyntheticEvent, data: ButtonProps) => void
export type handleRating = (_e: SyntheticEvent, data: RatingProps) => void
