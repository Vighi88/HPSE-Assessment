package com.hpse.assessment.server.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "GRAPHDATA")
public class GraphData implements Serializable {
	
	@Id
	@SequenceGenerator(name="SEQ_GEN", sequenceName="GRAPHDATA_SEQ", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SEQ_GEN")
	@Column(name = "GRAPHDATAID")
	private Long 	graphDataId;
	
	@Column(name = "HITLISTDETAILSID")
	private Long hitListDetailsId;
	
	@Column(name = "SOURCE")
	private String  source;
	
	@Column(name = "TARGET")
	private String  target;
	
	@Column(name = "RELATIONSHIPTYPE")
	private String  relationShipType;

	public Long getGraphDataId() {
		return graphDataId;
	}

	public void setGraphDataId(Long graphDataId) {
		this.graphDataId = graphDataId;
	}

	public Long getHitListDetailsId() {
		return hitListDetailsId;
	}

	public void setHitListDetailsId(Long hitListDetailsId) {
		this.hitListDetailsId = hitListDetailsId;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}

	public String getRelationShipType() {
		return relationShipType;
	}

	public void setRelationShipType(String relationShipType) {
		this.relationShipType = relationShipType;
	}
}

