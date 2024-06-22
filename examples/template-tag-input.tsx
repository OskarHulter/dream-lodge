import React from "react";
// import Tags from './tagify/react.tagify'
import Tags from "@yaireo/tagify/dist/react.tagify";

// A React component for a tagify "tag"
const Tag = ({ props: [tagData, tagify] }) => (
	<div
		title={tagData.title || tagData.value}
		contenteditable="false"
		spellcheck="false"
		tabIndex={tagify.settings.a11y.focusableTags ? 0 : -1}
		className={`${tagify.settings.classNames.tag} ${tagData.class ? tagData.class : ""}`}
		{...tagify.getCustomAttributes(tagData)}
	>
		<button
			title=""
			className={tagify.settings.classNames.tagX}
			role="button"
			aria-label="remove tag"
			type="button"
		/>
		<div>
			<span className={tagify.settings.classNames.tagText}>
				{tagData[tagify.settings.tagTextProp] || tagData.value}
			</span>
		</div>
	</div>
);

const TagifyWithTemplates = () => {
	return (
		<>
			<h2>
				Tagify with <em>React</em> components as templates:
			</h2>

			<Tags
				settings={{
					templates: {
						tag: Tag,
					},
				}}
				defaultValue="a,b,c"
				autoFocus={true}
			/>
		</>
	);
};

export default TagifyWithTemplates;
