import { connect } from "react-redux";
import { fetchArticles } from "../data/actions/api";

import Articles from "../components/Articles/Articles";

const mapStateToProps = state => {
	return {
		articles: state.get("articles"),
	}
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(fetchArticles()),
    };
};

// make sure we add mapDispatchToProps to the connect call
export default connect(mapStateToProps, mapDispatchToProps)(Articles);