/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createBusinessScenarioPlanReferenceFromDiscriminatorValue, createBusinessScenarioTaskTargetBaseFromDiscriminatorValue, serializeBusinessScenarioPlanReference, serializeBusinessScenarioTaskTargetBase, type BusinessScenarioPlanReference, type BusinessScenarioTaskTargetBase } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getPlanPostRequestBody
 */
export function createGetPlanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetPlanPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetPlanPostRequestBody(getPlanPostRequestBody: Partial<GetPlanPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getPlanPostRequestBody.backingStoreEnabled = true; },
        "target": n => { getPlanPostRequestBody.target = n.getObjectValue<BusinessScenarioTaskTargetBase>(createBusinessScenarioTaskTargetBaseFromDiscriminatorValue); },
    }
}
export interface GetPlanPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The target property
     */
    target?: BusinessScenarioTaskTargetBase;
}
/**
 * Provides operations to call the getPlan method.
 */
export interface GetPlanRequestBuilder extends BaseRequestBuilder<GetPlanRequestBuilder> {
    /**
     * Get information about the plannerPlan mapped to a given target. If a plannerPlan doesn't exist for the specified target at the time of the request, a new plan will be created for the businessScenario.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BusinessScenarioPlanReference
     * @see {@link https://learn.microsoft.com/graph/api/businessscenarioplanner-getplan?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetPlanPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<BusinessScenarioPlanReference | undefined>;
    /**
     * Get information about the plannerPlan mapped to a given target. If a plannerPlan doesn't exist for the specified target at the time of the request, a new plan will be created for the businessScenario.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetPlanPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetPlanPostRequestBody(writer: SerializationWriter, getPlanPostRequestBody: Partial<GetPlanPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<BusinessScenarioTaskTargetBase>("target", getPlanPostRequestBody.target, serializeBusinessScenarioTaskTargetBase);
    writer.writeAdditionalData(getPlanPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetPlanRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createBusinessScenarioPlanReferenceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetPlanPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetPlanRequestBuilderUriTemplate = "{+baseurl}/solutions/businessScenarios/{businessScenario%2Did}/planner/getPlan";
/* tslint:enable */
/* eslint-enable */