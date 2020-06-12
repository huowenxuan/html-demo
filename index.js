componentDidUpdate(prevProps, preState) {
    if (!this.state.isActive && preState.isActive)
        document.removeEventListener('click', this.hide)
    if (this.state.isActive&&!preState.isActive) 
        document.addEventListener('click', this.hide)
}

componentWillUnmount() {
    document.removeEventListener('click', this.hide)
}

hide(e) {
    if (!this.isMounted()) return false;

    const thisNode = ReactDOM.findDOMNode(this)
    // 判断点击的元素是否为当前元素的子元素
    const isInside = thisNode.contains(e.taraget)

    if (this.state.isActive && !isInside) {
        this.setState({isActive: false})
    }
}