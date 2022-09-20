import { Component, Host, h, Prop } from '@stencil/core';
import hljs from 'highlight.js';

@Component({
	tag: 'discord-code-block',
	styleUrl: 'discord-code-block.css'
})
export class DiscordCodeBlock {
	@Prop()
	public language?: string;

	@Prop()
	public code: string;

	public render() {
		return (
			<Host class="discord-code-block-pre discord-code-block-pre--multiline">
				<code
					innerHTML={this.language ? hljs.highlight(this.code, { language: this.language }).value : hljs.highlightAuto(this.code).value}
				/>
			</Host>
		);
	}
}
