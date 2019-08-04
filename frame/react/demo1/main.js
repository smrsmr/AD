class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nums: this.props.list.slice(0, 5),
			star: 0,
			end: 5,
			slideActive: -1
		};
		this.handScrol = this.handScrol.bind(this);
	}
	ClickNext = () => {
		$('.swiperPrev').removeClass('active');
		let lists = this.props.list;
		let star = this.state.star;
		let end = this.state.end;
		star += 5; end += 5;
		if (end >= lists.length) {
			end = lists.length;
			$('.swiperNext').addClass('active');
		};
		this.setState({
			nums: lists.slice(star, end),
			star: star,
			end: end
		})
	}
	ClickPrev = () => {
		$('.swiperNext').removeClass('active');
		let slideLength = $('.cencent .leftNav .swiperContainer .swiperSlide').length;
		let lists = this.props.list;
		let star = this.state.star;
		let end = this.state.end;
		if (slideLength < 5) {
			end = end - (lists.length - star);
			star -= 5;
		} else {
			star -= 5; end -= 5;
			if (star <= 0) {
				star = 0;
				$('.swiperPrev').addClass('active');
			};
		}
		this.setState({
			nums: lists.slice(star, end),
			star: star,
			end: end
		})
	}
	handScrol(index) {
		this.setState({
			slideActive: index
		})
	}
	render() {
		return (
			<div>
				<div className="header"></div>
				<div className="cencent">
					<div className="leftNav">
						<p className="line"></p>
						<div className="swiperContainer">
							<div className="swiperWrapper">
								{
									this.state.nums.map((v, i) => (
										<div key={i} className={['swiperSlide',this.state.slideActive === i &&'cur'].join(' ')} onClick={this.handScrol.bind(this,i)}>
											<div>
												<span className="l">{v.nper}</span>
												<span className="o"></span>
												<span className="r">{v.header}</span>
											</div>
										</div>
									))
								}
							</div>
						</div>
						<p className="swiperNext" onClick={this.ClickNext}></p>
						<p className="swiperPrev active" onClick={this.ClickPrev}></p>
					</div>
				</div>
			</div>
		)
	}
}
ReactDOM.render(
	<Main list={setData} />,
	document.getElementById('root')
)
