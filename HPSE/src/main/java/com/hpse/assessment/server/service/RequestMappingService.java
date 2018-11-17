package com.hpse.assessment.server.service;

import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hpse.assessment.server.model.Requests;
import com.hpse.assessment.server.repository.RequestRepository;

@Service
public class RequestMappingService {
	
	@Autowired
	private RequestRepository requestRepository;
	

	public List<Requests> getRequestList()
	{
		List<Requests> objRequest = requestRepository.findAll();

		return objRequest;
	}
	
	public Requests saveRequests(Requests objInputRequest) {
		// TODO Auto-generated method stub
		Requests objRequest = new Requests();
		objRequest.setRequestSubmissionDate(new Date());
		objRequest.setNoOfCities(objInputRequest.getNoOfCities());
		/*Set<Conditions> objConditionSet = new HashSet<Conditions>();
		for (Iterator<ConditionList> it = objRequestConditions.getConditionList().iterator(); it.hasNext();) {
			Set<Components> objComponentSet = new HashSet<Components>();
			Conditions objCondition = new Conditions();
			ConditionList objConditionList =it.next();
				for(Iterator<String> itComponents = objConditionList.getComponent().iterator();itComponents.hasNext();)
				{
					Components objComponents = new Components();
					objComponents.setComponents(itComponents.next());
					objComponentSet.add(objComponents);
				}
			objCondition.setComponent(objComponentSet);
			objCondition.setExpectedTrafficShift(objConditionList.getExpectedTrafficShift());
			objConditionSet.add(objCondition);
		}
		objRequest.setConditions(objConditionSet);*/
		return requestRepository.save(objRequest);
	}


}
