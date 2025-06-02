abstract class CreatePostDto {
  readonly link: string
  readonly title: string
  readonly description: string
  readonly createdAt: Date
}


export class PostModel extends CreatePostDto {
  constructor(dto: CreatePostDto) {
    super()

    this.link = dto.link
    this.title = dto.title
    this.description = dto.description
    this.createdAt = dto.createdAt
  }
}

export function getPostModelFromJson(json: Record<string, unknown>): PostModel {
  return new PostModel({
    link: String(json.link),
    title: String(json.title),
    description: String(json.description),
    createdAt: new Date(json.createdAt),
  })
}
