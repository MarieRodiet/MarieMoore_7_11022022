export default class BadgeTemplate {
    constructor(object) {
        this._category = object.category;
        this._item = object.item;

        this.$container = document.createElement("div");
    }

    getBadge() {
        this.$container.className = "badgeContainer";
        let badgeCard = `
        <span category="${this._category}" item="${this._item}" class="badge">
            ${this._item}
            <svg viewBox="0 0 512 512">
            <g>
                <path id="${this._item}" class="deleteSvg" fill= "currentColor" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>
            </g>
        </span>`;
        this.$container.innerHTML = badgeCard;
        /*this.$container.querySelector(".badge path.deleteSvg").addEventListener("click"), () => {
            this.handleDeleteBadges();
        }*/
        return this.$container;

    }


}