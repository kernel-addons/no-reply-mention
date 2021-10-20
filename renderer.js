import Patcher from "./patcher.js";
import Webpack from "./webpack.js";

export default new class NoReplyMention {
    start() {Webpack.wait(() => this.onStart());}

    onStart() {
        const ReplyActions = Webpack.findByProps("createPendingReply");
       
        Patcher.patch(ReplyActions, "createPendingReply", (data) => {
            data.showMentionToggle = true; // Always show the mention toggle.
            data.shouldMention = false;
        }, true);

        console.log(`[Kernel:Packages] ${this.constructor.name} has started!`);
    }

    stop() {
        Patcher.unpatchAll();
    }
}