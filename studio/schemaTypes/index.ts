import {author} from './author'
import {blogPost} from './blogPost'
import {newsItem} from './newsItem'
import {redirect} from './redirect'
import {seo} from './seo'
import {siteSettings} from './siteSettings'

export const schemaTypes = [siteSettings, blogPost, newsItem, author, redirect, seo]
