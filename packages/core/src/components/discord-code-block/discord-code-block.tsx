import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';
import hljs from 'highlight.js';

@Component({
	tag: 'discord-code-block',
	styleUrl: 'discord-code-block.css'
})
export class DiscordCodeBlock implements ComponentInterface {
	/**
	 * The language of the code block.
	 */
	@Prop()
	public language?: string;

	/**
	 * The code to display.
	 */
	@Prop()
	public code: string;

	public render() {
		return (
			<Host class="discord-code-block-pre discord-code-block-pre--multiline language">
				<code
					class={this.language ? `hljs language-${this.language}` : 'hljs'}
					innerHTML={this.language ? hljs.highlight(this.code, { language: this.language }).value : hljs.highlightAuto(this.code).value}
				/>
			</Host>
		);
	}
}
