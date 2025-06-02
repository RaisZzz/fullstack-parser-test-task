abstract class CreatePostDto {
  readonly id: number
  readonly link: string
  readonly title: string
  readonly description: string
  readonly createdAt: Date
}


export class PostModel extends CreatePostDto {
  constructor(dto: CreatePostDto) {
    super()

    this.id = dto.id
    this.link = dto.link
    this.title = dto.title
    this.description = dto.description
    this.createdAt = dto.createdAt
  }
}

export function getPostModelFromJson(json: Record<string, unknown>): PostModel {
  return new PostModel({
    id: parseInt(json.id) || 0,
    link: String(json.link),
    title: String(json.title),
    description: String(json.descr),
    createdAt: new Date(json.date),
  })
}
