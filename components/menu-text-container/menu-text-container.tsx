import style from './menu-text-container.module.scss';

export default function MenuTextContainer({title, description, iconPath}: { title: string, description: string, iconPath }) {
    return <div id="text-container" className={style.textContainer}>
        {iconPath && (
            <img src={iconPath} className={style.textContainerIcon}/>
        )}
        <div id="text-container-title" className={style.textContainerTitle}>{title}</div>
        <div id="text-container-description"
             className={style.textContainerDescription}>{description}</div>
    </div>
}
