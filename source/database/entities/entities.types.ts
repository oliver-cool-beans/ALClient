import { Document, Model } from "mongoose"
import { ServerRegion, ServerIdentifier } from "../../definitions/adventureland.js"
import { MapName, MonsterName } from "../../definitions/adventureland-data.js"

export interface IEntity {
    map: MapName
    in: string
    x: number
    y: number
    serverRegion: ServerRegion
    serverIdentifier: ServerIdentifier
    type: MonsterName
    name?: string
    level?: number
    hp?: number
    target?: string
    lastSeen?: number
}

export interface IEntityDocument extends IEntity, Document { }

export type IEntityModel = Model<IEntityDocument>
// export interface IEntityModel extends Model<IUserDocument> { }